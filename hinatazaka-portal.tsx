"use client"
import Script from "next/script"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Film, Headphones, Tv, FileText, Filter } from "lucide-react"
import { ContentCard } from "./components/content-card"
import { MemberFilter } from "./components/member-filter"
import { content } from "./data/content"
import { tverContent } from "./data/content.tver"
import { members } from "./data/members"

type ContentType = "all" | "movie" | "audio" | "tver" | "column"

export const all_content = [...tverContent, ...content]; // ここで結合

export default function HinatazakaPortal() {
  const [selectedType, setSelectedType] = useState<ContentType>("all")
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showMemberFilter, setShowMemberFilter] = useState(false)

  const filteredContent = useMemo(() => {
    return all_content.filter((item) => {
      // タイプフィルター
      if (selectedType !== "all" && item.type !== selectedType) {
        return false
      }

      // メンバーフィルター
      if (selectedMembers.length > 0) {
        const hasSelectedMember = selectedMembers.some((memberId) => item.members.includes(memberId))
        if (!hasSelectedMember) return false
      }

      // 検索クエリフィルター
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = item.title.toLowerCase().includes(query)
        const matchesDescription = item.description.toLowerCase().includes(query)
        const matchesMember = item.members.some((memberId) => {
          const member = members.find((m) => m.id === memberId)
          return member?.name.toLowerCase().includes(query)
        })

        if (!matchesTitle && !matchesDescription && !matchesMember) {
          return false
        }
      }

      return true
    })
  }, [selectedType, selectedMembers, searchQuery])

  const handleMemberToggle = (memberId: string) => {
    setSelectedMembers((prev) => (prev.includes(memberId) ? prev.filter((id) => id !== memberId) : [...prev, memberId]))
  }

  const handleClearMembers = () => {
    setSelectedMembers([])
  }

  const contentTypes = [
    { id: "all" as ContentType, label: "全て", icon: null },
    { id: "movie" as ContentType, label: "Movie", icon: Film },
    { id: "audio" as ContentType, label: "Audio", icon: Headphones },
    // { id: "tver" as ContentType, label: "TVer", icon: Tv },
    { id: "column" as ContentType, label: "コラム", icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        {/* Google tag (gtag.js) */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-DNC9QPSE9K"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DNC9QPSE9K');
          `}
        </Script>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              おひさまポータル
            </h1>
            <p className="text-muted-foreground mt-2">日向坂46の現役メンバーや卒業生の動画・ラジオなどを検索できるファンサイト</p>
          </div>

          {/* Content Type Icons */}
          <div className="flex justify-center gap-2 mb-4 flex-wrap">
            {contentTypes.map((type) => {
              const Icon = type.icon
              return (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type.id)}
                  className="flex items-center gap-2"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {type.label}
                </Button>
              )
            })}
          </div>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="タイトル、メンバー名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={showMemberFilter ? "default" : "outline"}
              onClick={() => setShowMemberFilter(!showMemberFilter)}
            >
              <Filter className="w-4 h-4 mr-2" />
              メンバー
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Member Filter */}
        {showMemberFilter && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <MemberFilter
                selectedMembers={selectedMembers}
                onMemberToggle={handleMemberToggle}
                onClearAll={handleClearMembers}
              />
            </CardContent>
          </Card>
        )}

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">検索結果</h2>
            <Badge variant="secondary">{filteredContent.length}件</Badge>
          </div>
          {(selectedType !== "all" || selectedMembers.length > 0 || searchQuery) && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedType("all")
                setSelectedMembers([])
                setSearchQuery("")
              }}
            >
              フィルターをクリア
            </Button>
          )}
        </div>

        {/* Content Grid */}
        {filteredContent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">検索結果が見つかりませんでした</p>
                <p className="text-sm">検索条件を変更してもう一度お試しください</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground text-sm">このサイトは日向坂46の非公式ファンサイトです。</p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2024 日向坂46ポータル - ファンによる、ファンのためのサイト
          </p>
        </div>
      </footer>
    </div>
  )
}
