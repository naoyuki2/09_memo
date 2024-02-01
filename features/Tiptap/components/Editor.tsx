'use client'

import React, { useEffect } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { ContentType } from '@/app/type'

type Props = {
    activeContent: ContentType | undefined
    updateContent: (contents: string) => void
    updateTitle: (title: string) => void
}

const Editor = ({ activeContent, updateContent, updateTitle }: Props) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'ここに入力してください',
            }),
        ],
        content: activeContent?.content,
        editorProps: {
            attributes: {
                class: 'prose prose-base m-5 focus:outline-none text-left',
            },
        },
    })

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(activeContent?.content!)
            editor.on('update', () => {
                updateContent(editor.getHTML())
            })
        }
    }, [editor, updateContent])

    if (!editor) {
        return null
    }

    return (
        <div className="mx-auto border-gray-500 border-2">
            <div className="flex flex-wrap gap-2 border-b border-gray-500 p-4 text-xl">
                <input
                    value={activeContent?.title}
                    onChange={(e) => {
                        updateTitle(e.target.value)
                    }}
                    className="border-2 border-gray-500 p-2 w-full"
                />
            </div>
            <div className="p-3 overflow-y-scroll h-[70vh] overflow-hidden mt-3">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default Editor
