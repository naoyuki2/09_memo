'use client'

import React, { useEffect } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type Props = {
    content: string | undefined
    updateContent: (contents: string) => void
}

const Editor = ({ content, updateContent }: Props) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        editorProps: {
            attributes: {
                class: 'prose prose-base m-5 focus:outline-none text-left',
            },
        },
    })

    useEffect(() => {
        if (editor) {
            editor.commands.setContent(content!)
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
            <div className="p-3 overflow-y-scroll h-[70vh] overflow-hidden mt-3">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default Editor
