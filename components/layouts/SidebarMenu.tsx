import { ContentType } from '@/app/type'
import React from 'react'
import Button from '../elements/Button'

type Props = {
    contents: ContentType[]
    activeContentId: number | undefined
    setActiveContentId: (id: number | undefined) => void
    setContents: (contents: ContentType[]) => void
}

const SidebarMenu = ({
    contents,
    activeContentId,
    setActiveContentId,
    setContents,
}: Props) => {
    return (
        <>
            <div className="block md:hidden">三</div>
            <div className="hidden md:block sticky top-0 h-screen w-64 bg-gray-200 h-full overflow-scroll hidden-scrollbar">
                <div className="flex flex-col gap-5">
                    <Button
                        bgColor="bg-yellow-100"
                        content="追加"
                        onClick={() => {
                            let newId: number
                            if (contents.length === 0) {
                                newId = 1
                            } else {
                                newId = contents[contents.length - 1].id + 1
                            }
                            setContents([
                                ...contents,
                                {
                                    id: newId,
                                    title: 'タイトル' + newId,
                                    content: '',
                                },
                            ])
                        }}
                    />
                    {contents.map((content) => {
                        return (
                            <div key={content.id}>
                                <Button
                                    bgColor="bg-blue-100"
                                    content={content.title}
                                    onClick={() =>
                                        setActiveContentId(content.id)
                                    }
                                />
                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        const newContents = contents.filter(
                                            (c) => c.id !== content.id,
                                        )
                                        setContents(newContents)
                                        if (newContents.length === 0) {
                                            setActiveContentId(undefined) // or setActiveContentId(0)
                                        } else if (
                                            content.id === activeContentId
                                        ) {
                                            const minId = newContents.reduce(
                                                (min, c) => Math.min(min, c.id),
                                                Number.MAX_SAFE_INTEGER,
                                            )
                                            setActiveContentId(
                                                minId !==
                                                    Number.MAX_SAFE_INTEGER
                                                    ? minId
                                                    : 0,
                                            )
                                        }
                                    }}
                                >
                                    ×
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SidebarMenu
