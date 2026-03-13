import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phoneNumber, message } = await request.json();

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending logic here
    // You can use services like:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Nodemailer
    // - SendInBlue

    console.log('Contact form submission:', {
      fullName,
      email,
      phoneNumber,
      message,
      timestamp: new Date().toISOString(),
    });

    // For now, just return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
