'use client'

import { useState } from 'react'
import Editor from '../features/Tiptap/components/Editor'
import SidebarMenu from '@/components/layouts/SidebarMenu'
import { ContentType } from './type'

export default function Home() {
    const initialContents = [
        {
            id: 1,
            title: 'ファイル１',
            content: 'テスト１',
        },
        {
            id: 2,
            title: 'ファイル２',
            content: 'テスト２',
        },
        {
            id: 3,
            title: 'ファイル３',
            content: 'テスト３',
        },
    ]

    const [contents, setContents] = useState<ContentType[]>(initialContents)
    const [activeContentId, setActiveContentId] = useState<number | undefined>(
        initialContents[0].id,
    )

    const activeContent = contents.find(
        (content) => content.id === activeContentId,
    )

    const updateContent = (
        id: number | undefined,
        newContent: string | undefined,
    ) => {
        setContents(
            contents.map((content) =>
                content.id === id
                    ? { ...content, content: newContent }
                    : content,
            ),
        )
    }

    const updateTitle = (
        id: number | undefined,
        newTitle: string | undefined,
    ) => {
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
                activeContentId={activeContentId}
                setActiveContentId={setActiveContentId}
                setContents={setContents}
            />
            <div className="w-screen">
                <div className="">
                    {activeContent && (
                        <Editor
                            activeContent={activeContent}
                            updateContent={(newContent) =>
                                updateContent(activeContentId, newContent)
                            }
                            updateTitle={(newTitle) =>
                                updateTitle(activeContentId, newTitle)
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
