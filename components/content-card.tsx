import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar } from "lucide-react"
import type { Content } from "../types/member"
import { members } from "../data/members"

import { sendContentClickEvent } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

interface ContentCardProps {
  content: Content
}

export function ContentCard({ content }: ContentCardProps) {
  const contentMembers = members.filter((member) => content.members.includes(member.id))

  const getTypeColor = (type: string) => {
    switch (type) {
      case "movie":
        return "bg-red-100 text-red-800"
      case "audio":
        return "bg-green-100 text-green-800"
      case "tver":
        return "bg-blue-100 text-blue-800"
      case "column":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "movie":
        return "Movie"
      case "audio":
        return "Audio"
      case "tver":
        return "TVer"
      case "column":
        return "コラム"
      default:
        return type
    }
  }

  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get('category') || 'すべて'
  const keyword = searchParams.get('keyword') || ''
  const membersRaw = searchParams.get('members') || ''
  const memberFilters = membersRaw ? membersRaw.split(',') : []

  const handleClick = () => {
    sendContentClickEvent({
      title: content.title,
      categoryFilter,
      memberFilters,
      keyword,
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-100 relative">
        <img src={content.thumbnail || "/placeholder.svg"} alt={content.title} className="w-full h-full object-cover" />
        <Badge className={`absolute top-2 left-2 ${getTypeColor(content.type)}`}>{getTypeLabel(content.type)}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{content.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{content.description}</p>
        {contentMembers.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {contentMembers.map((member) => (
              <Badge key={member.id} variant="outline" className="text-xs">
                {member.name}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {content.publishDate}
          <span>•</span>
          <span>{content.platform}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" size="sm">
          <a href={content.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            視聴する
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
