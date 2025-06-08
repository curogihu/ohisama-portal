import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MessageCircle,
  Bell,
  ThumbsUp,
  MessageSquare,
  Share,
  Bookmark,
  Home,
  Users,
  Briefcase,
  User,
} from "lucide-react"

export default function Component() {
  return (
    <div className="max-w-sm mx-auto bg-background min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
            <AvatarFallback>田中</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="検索" className="pl-10 h-9 bg-muted/50 border-0" />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="w-9 h-9">
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Feed */}
      <main className="pb-16">
        {/* Post Composer */}
        <Card className="m-4 mb-2">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                <AvatarFallback>田中</AvatarFallback>
              </Avatar>
              <Input placeholder="投稿を作成..." className="flex-1 border-0 bg-muted/50" />
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        <div className="space-y-2">
          {/* Post 1 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-user.jpg" alt="佐藤美咲" />
                  <AvatarFallback>佐藤</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">佐藤美咲</h3>
                    <Badge variant="secondary" className="text-xs">
                      1st
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    プロダクトマネージャー at テックスタートアップ株式会社
                  </p>
                  <p className="text-xs text-muted-foreground">2時間前</p>
                </div>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm leading-relaxed mb-3">
                新しいプロダクトのローンチが成功しました！🎉
                チーム全員の努力の結果です。ユーザーからのフィードバックも非常にポジティブで、次のフェーズに向けて準備を進めています。
              </p>
              <div className="bg-muted/30 rounded-lg p-3">
                <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md mb-2"></div>
                <h4 className="font-medium text-sm">プロダクトローンチ成功の秘訣</h4>
                <p className="text-xs text-muted-foreground">効果的なチームワークとユーザー中心設計</p>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span className="text-xs">いいね 24</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span className="text-xs">コメント 8</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Share className="w-4 h-4 mr-1" />
                  <span className="text-xs">シェア</span>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Post 2 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-user.jpg" alt="山田太郎" />
                  <AvatarFallback>山田</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">山田太郎</h3>
                    <Badge variant="secondary" className="text-xs">
                      2nd
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">シニアエンジニア at グローバルテック株式会社</p>
                  <p className="text-xs text-muted-foreground">5時間前</p>
                </div>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm leading-relaxed mb-3">
                React 19の新機能について学習中です。Server
                Componentsの進化が素晴らしいですね。開発体験が大幅に向上しそうです。
              </p>
              <div className="flex gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  #React
                </Badge>
                <Badge variant="outline" className="text-xs">
                  #JavaScript
                </Badge>
                <Badge variant="outline" className="text-xs">
                  #フロントエンド
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span className="text-xs">いいね 15</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span className="text-xs">コメント 3</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Share className="w-4 h-4 mr-1" />
                  <span className="text-xs">シェア</span>
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Post 3 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder-user.jpg" alt="鈴木花子" />
                  <AvatarFallback>鈴木</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">鈴木花子</h3>
                    <Badge variant="secondary" className="text-xs">
                      1st
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">UXデザイナー at デザインスタジオ合同会社</p>
                  <p className="text-xs text-muted-foreground">1日前</p>
                </div>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm leading-relaxed mb-3">
                ユーザビリティテストの結果が出ました。想定していた課題が明確になり、次のイテレーションに向けた改善点が見えてきました。データドリブンなデザインの重要性を改めて実感しています。
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span className="text-xs">いいね 32</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span className="text-xs">コメント 12</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Share className="w-4 h-4 mr-1" />
                  <span className="text-xs">シェア</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-background border-t">
        <div className="flex items-center justify-around py-2">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
            <Home className="w-5 h-5" />
            <span className="text-xs">ホーム</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
            <Users className="w-5 h-5" />
            <span className="text-xs">人脈</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">求人</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
            <Bell className="w-5 h-5" />
            <span className="text-xs">通知</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 h-auto py-2">
            <User className="w-5 h-5" />
            <span className="text-xs">プロフィール</span>
          </Button>
        </div>
      </nav>
    </div>
  )
}
