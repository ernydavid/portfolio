import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET () {
  const filePath = path.join(process.cwd(), 'public', 'data', 'portfolio.json')

  try {
    const data = fs.readFileSync(filePath, 'utf-8')

    return NextResponse.json(JSON.parse(data), { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error reading file!' }, { status: 500 })
  }
}
