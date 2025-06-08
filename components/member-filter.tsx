"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { members } from "../data/members"

interface MemberFilterProps {
  selectedMembers: string[]
  onMemberToggle: (memberId: string) => void
  onClearAll: () => void
}

export function MemberFilter({ selectedMembers, onMemberToggle, onClearAll }: MemberFilterProps) {
  const activeMembers = members.filter((m) => m.isActive)
  const graduatedMembers = members.filter((m) => !m.isActive)

  return (
    <div className="space-y-4">
      {selectedMembers.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium">選択中:</span>
          {selectedMembers.map((memberId) => {
            const member = members.find((m) => m.id === memberId)
            return member ? (
              <Badge key={memberId} variant="default" className="gap-1">
                {member.name}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => onMemberToggle(memberId)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ) : null
          })}
          <Button variant="outline" size="sm" onClick={onClearAll}>
            すべてクリア
          </Button>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold mb-2 text-green-700">現役メンバー</h3>
          <div className="flex flex-wrap gap-2">
            {activeMembers.map((member) => (
              <Button
                key={member.id}
                variant={selectedMembers.includes(member.id) ? "default" : "outline"}
                size="sm"
                onClick={() => onMemberToggle(member.id)}
                className="text-xs"
              >
                {member.name}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-600">卒業メンバー</h3>
          <div className="flex flex-wrap gap-2">
            {graduatedMembers.map((member) => (
              <Button
                key={member.id}
                variant={selectedMembers.includes(member.id) ? "default" : "outline"}
                size="sm"
                onClick={() => onMemberToggle(member.id)}
                className="text-xs"
              >
                {member.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
