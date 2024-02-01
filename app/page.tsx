'use client'

import { useState } from 'react'
import Editor from '../features/Tiptap/components/Editor'
import Button from '@/components/elements/Button'
import SidebarMenu from '@/components/layouts/SidebarMenu'
import { ContentType } from './type'

export default function Home() {
    const initialContents = [
        {
            id: 1,
            content: 'テスト１',
        },
        {
            id: 2,
            content: 'テスト２',
        },
        {
            id: 3,
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

    const updateContent = (id: number, newContent: string) => {
        setContents(
            contents.map((content) =>
                content.id === id
                    ? { ...content, content: newContent }
                    : content,
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
    )
}
