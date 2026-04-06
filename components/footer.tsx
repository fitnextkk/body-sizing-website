import Link from 'next/link'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Final CTA Section */}
      <div className="bg-accent text-accent-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent-foreground/80 text-sm mb-2 uppercase tracking-wider">
            入会金無料+初月20%OFF 4/30まで
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            理想のカラダへの第一歩を今すぐ
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
            JR難波駅徒歩2分。完全予約制・完全個室のパーソナルジムで、
            あなただけのトレーニングを始めましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#06C755] text-white hover:bg-[#06C755]/90 text-lg px-10 py-7 shadow-lg"
            >
              <a href="https://line.me/R/ti/p/%40zxw6487t" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                LINEで予約する（24時間受付・最速返信）
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-base px-8 py-7"
            >
              <Link href="#contact">
                メールフォームで予約
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Body<span className="text-accent">Sizing</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm leading-relaxed">
              大阪・JR難波駅徒歩2分の完全予約制パーソナルトレーニングジム。
              30〜50代のダイエット・ボディメイクに特化したプログラムを提供。
            </p>
            {/* SNSリンク用スペース（必要に応じて追加） */}
            <div className="flex gap-3">
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">メニュー</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#facility"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Facility
                </Link>
              </li>
              <li>
                <Link
                  href="#results"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Before & After
                </Link>
              </li>
              <li>
                <Link
                  href="#campaign"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Campaign
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">アクセス・営業時間</h4>
            <address className="text-sm text-muted-foreground not-italic leading-relaxed">
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  〒556-0022<br />
                  大阪市浪速区<br />
                  桜川1-2-4<br />
                  ZEN901
                </span>
              </div>
              <p className="mb-3">
                JR難波駅 徒歩2分<br />
                地下鉄なんば駅各線 徒歩4分前後
              </p>
              <div className="flex items-start gap-2 mb-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span>06-6809-5016</span>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">
                    ※セッション中はお電話に出られない場合がございます。
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <p>平日 7:00 - 22:00</p>
                <p>土日祝 9:00 - 20:00</p>
                <p>定休日 不定休</p>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Body Sizing. All rights reserved.</p>
          {/* 法的リンク用スペース（必要に応じて追加） */}
          <div className="flex gap-4">
          </div>
        </div>
      </div>
    </footer>
  )
}
