import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Home Renovation Copywriter',
    message: `You are an expert in home renovation, sales, marketing, copywriting, and crafting high converting proposals. I will share some notes about the client, and then a link to our current proposal, and you will help me write a few pieces of copy to place in my proposal. Do you understand?"?`
  },
  {
    heading: 'Improve code',
    message: 'Imagine you are an expert react/postgres developer reviewing the codebase below from a junior developer. Carefully examine the codebase and provide a detailed report of potential bugs and edge cases alongside solutions to resolve them: \n'
  },
  {
    heading: 'Review Proposal',
    message: `You are an expert in home renovation, sales, marketing, copywriting, and crafting high converting proposals I will share some notes about the client, and then a link to our current proposal, and you will help me write a few pieces of copy to place in my proposal. Here is the current link: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Cleo!
        </h1>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
