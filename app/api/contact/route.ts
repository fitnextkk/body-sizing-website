import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // In production, use a proper email service like Resend, SendGrid, or Nodemailer
    // This is the configuration for the email:
    // To: bodynote@fitnext.co.jp
    // BCC: wholesale@wishcraft.co.jp
    
    const emailConfig = {
      to: 'bodynote@fitnext.co.jp',
      bcc: 'wholesale@wishcraft.co.jp',
      subject: '【Body Note】無料カウンセリング予約',
      body: `
お名前: ${data.name}
電話番号: ${data.phone}
希望日時: ${data.datetime}
相談内容:
${data.message || 'なし'}
      `.trim(),
    }
    
    // Log for demonstration (replace with actual email sending in production)
    console.log('Email configuration:', emailConfig)
    
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
