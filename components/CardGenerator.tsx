'use client'

import { useState } from 'react'

interface CardForm {
  form: {
    icon: string
    date: string
    title: string
    content: string
    author: string
    textCount: string
    qrCodeTitle: string
    qrCodeText: string
    iosSubhead: string
    pagination: string
    qrCode: string
    textCountNum: number
  }
  style: {
    align: string
    backgroundName: string
    backShadow: string
    font: string
    width: number
    ratio: string
    height: number
    fontScale: number
    padding: string
  }
  switchConfig: {
    showDate: boolean
    showTitle: boolean
    showContent: boolean
    showAuthor: boolean
    showTextCount: boolean
    showPageNum: boolean
  }
  temp: string
}

export default function CardGenerator() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const generateCard = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const cardData: CardForm = {
        form: {
          icon: "data:image/png;base64,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",
          date: new Date().toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          title: "👋 hi 你好",
          content: "<p>💡你可以在这里输入文字尝试一下，支持 Markdown 语法实时渲染。</p><p>- 复制粘贴可插入图片\n- Ctrl+I 斜体文本\n- Ctrl+B 加粗文本\n- 二维码可修改隐藏</p>",
          author: "是魔王哒",
          textCount: "字数",
          qrCodeTitle: "流光卡片",
          qrCodeText: "扫描二维码",
          iosSubhead: "备忘录",
          pagination: "01",
          qrCode: "https://fireflycard.shushiai.com/",
          textCountNum: 86
        },
        style: {
          align: "left",
          backgroundName: "memo-color-1",
          backShadow: "",
          font: "MiSans-Regular",
          width: 440,
          ratio: "",
          height: 0,
          fontScale: 1,
          padding: "30px"
        },
        switchConfig: {
          showDate: true,
          showTitle: true,
          showContent: true,
          showAuthor: true,
          showTextCount: true,
          showPageNum: false
        },
        temp: "tempMemo"
      }

      const response = await fetch('/api/card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setResult(data.url)
    } catch (error) {
      console.error('Error generating card:', error)
      setError('生成卡片失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <button
        onClick={generateCard}
        disabled={loading}
        className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-primary/90 hover:shadow-lg'
        }`}
      >
        {loading ? '生成中...' : '生成卡片'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4">
          <img
            src={result}
            alt="生成的卡片"
            className="w-full rounded-lg shadow-lg"
          />
          <a
            href={result}
            download
            className="mt-4 block w-full text-center py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors duration-300"
          >
            下载图片
          </a>
        </div>
      )}
    </div>
  )
} 