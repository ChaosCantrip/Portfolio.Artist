import { NextResponse } from 'next/server'

export async function GET(request) {
    return NextResponse.json({
        status: 'ok'
    }, { status: 200 })
}