'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const results = [
  {
    id: 1,
    beforeImage: '/images/before-2.jpg',
    afterImage: '/images/after-2.jpg',
    name: 'S様',
    age: '30代女性',
    period: '3ヶ月',
    weightLoss: '-7.5kg',
    bodyFat: '-6%',
    testimonial:
      '産後の体型が気になっていましたが、完全個室なので周りの目を気にせずトレーニングできます。天満から自転車で通っています。',
  },
  {
    id: 2,
    beforeImage: '/images/before-1.jpg',
    afterImage: '/images/after-1.jpg',
    name: 'K様',
    age: '40代男性',
    period: '4ヶ月',
    weightLoss: '-12kg',
    bodyFat: '-8%',
    testimonial:
      '南森町駅から徒歩1分で通いやすく、仕事帰りに梅田から通っています。食事指導も無理なく続けられ、見た目も数値も大きく変わりました。',
  },
  {
    id: 3,
    beforeImage: '/images/before-3.jpg',
    afterImage: '/images/after-3.jpg',
    name: 'T様',
    age: '50代男性',
    period: '5ヶ月',
    weightLoss: '-15kg',
    bodyFat: '-10%',
    testimonial:
      '健康診断の数値が気になり始め、梅田の職場から通い始めました。血圧も下がり、体が軽くなって毎日が楽しくなりました。',
  },
]

export function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
  }

  const currentResult = results[currentIndex]

  return (
    <section id="results" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Before & After
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-3 mb-4 text-balance">
            お客様の変化
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            南森町・天満・梅田エリアから通われているお客様の
            実際のビフォーアフターをご紹介します。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Before
                  </span>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={currentResult.beforeImage}
                      alt={`${currentResult.name} トレーニング前`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 22vw"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    After
                  </span>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg ring-2 ring-accent">
                    <Image
                      src={currentResult.afterImage}
                      alt={`${currentResult.name} トレーニング後`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 22vw"
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-5">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full h-10 w-10"
                  aria-label="前のお客様"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {results.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        index === currentIndex
                          ? 'bg-accent'
                          : 'bg-border hover:bg-muted-foreground'
                      }`}
                      aria-label={`${index + 1}番目のお客様を表示`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full h-10 w-10"
                  aria-label="次のお客様"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-5 md:p-6 border border-border">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{currentResult.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentResult.age}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xl md:text-2xl font-bold text-accent">
                    {currentResult.weightLoss}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">体重</p>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xl md:text-2xl font-bold text-accent">
                    {currentResult.bodyFat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">体脂肪率</p>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    {currentResult.period}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">期間</p>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-1 -left-1 h-6 w-6 text-accent/20" />
                <p className="text-muted-foreground text-sm leading-relaxed pl-5">
                  {currentResult.testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto">
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                currentIndex === index
                  ? 'ring-2 ring-accent ring-offset-2 ring-offset-background'
                  : 'opacity-60 hover:opacity-100'
              }`}
              aria-label={`${result.name}の結果を表示`}
            >
              <Image
                src={result.afterImage}
                alt={`${result.name} の結果`}
                fill
                className="object-cover"
                sizes="100px"
                quality={70}
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            あなたも理想のカラダを手に入れませんか？
          </p>
          <Button 
            asChild 
            size="lg" 
            className="text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="#contact">
              無料カウンセリングを予約する
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
