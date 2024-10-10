import { Data } from '@/lib/types'
import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET () {
  const filePath = path.join(process.cwd(), 'public', 'data', 'portfolio.json')

  try {
    const data = await fs.readFileSync(filePath, 'utf-8')
    const jsonData: Data = JSON.parse(data)

    return NextResponse.json(jsonData, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error reading file!' }, { status: 500 })
  }
}
