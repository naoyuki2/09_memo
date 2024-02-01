'use client'

import { useState } from 'react'
import Editor from '../features/Tiptap/components/Editor'
import SidebarMenu from '@/components/layouts/SidebarMenu'
import { ContentType } from './type'

export default function Home() {
    const initialContents = [
        {
            id: 1,
            title: 'タイトル１',
            content: 'テスト１',
        },
        {
            id: 2,
            title: 'タイトル２',
            content: 'テスト２',
        },
        {
            id: 3,
            title: 'タイトル３',
            content: 'テスト３',
        },
    ]

    const [contents, setContents] = useState<ContentType[]>(initialContents)
    const [activeContentId, setActiveContentId] = useState<number>(
        initialContents[0].id,
    )

    const activeContent = contents.find(
        (content) => content.id === activeContentId,
    )

    const updateContent = (id: number, newContent: string | undefined) => {
        setContents(
            contents.map((content) =>
                content.id === id
                    ? { ...content, content: newContent }
                    : content,
            ),
        )
    }

    const updateTitle = (id: number, newTitle: string | undefined) => {
        setContents(
            contents.map((content) =>
                content.id === id ? { ...content, title: newTitle } : content,
            ),
        )
    }

    return (
        <div className="flex">
            <SidebarMenu
                contents={contents}
                setActiveContentId={setActiveContentId}
                setContents={setContents}
            />
            <div className="w-screen">
                <div className="py-3 border-2 border-black">
                    <span className="bg-orange-400 text-white py-3 px-">
                        タイトル
                    </span>
                    <input
                        value={activeContent?.title}
                        onChange={(e) => {
                            updateTitle(activeContentId, e.target.value)
                        }}
                        className="border-2 border-black"
                    />
                </div>
                <div className="">
                    {activeContent && (
                        <Editor
                            content={activeContent.content}
                            updateContent={(newContent) =>
                                updateContent(activeContentId, newContent)
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
