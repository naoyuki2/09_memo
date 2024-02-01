import { ContentType } from '@/app/type'
import React from 'react'
import Button from '../elements/Button'

type Props = {
    contents: ContentType[]
    setActiveContentId: (id: number) => void
    setContents: (contents: ContentType[]) => void
}

const SidebarMenu = ({ contents, setActiveContentId, setContents }: Props) => {
    return (
        <>
            <div className="block md:hidden">三</div>
            <div className="hidden md:block sticky top-0 h-screen w-64 bg-gray-200">
                <div className="flex flex-col gap-5">
                    {contents.map((content) => {
                        return (
                            <Button
                                key={content.id}
                                bgColor="bg-blue-100"
                                content={content.title}
                                onClick={() => setActiveContentId(content.id)}
                            />
                        )
                    })}
                    <Button
                        bgColor="bg-yellow-100"
                        content="追加"
                        onClick={() => {
                            const newId = contents[contents.length - 1].id + 1
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
                </div>
            </div>
        </>
    )
}

export default SidebarMenu
