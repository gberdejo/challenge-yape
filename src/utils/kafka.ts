import { kafka } from '../index'
import mitt from 'mitt'

export const emitter = mitt()
import '../events'

export const subscribe = async () => {
  const consumer = kafka.consumer({ groupId: 'yape-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'yape-topic', fromBeginning: true })

  console.log('subscribe:topic:yape-topic🚀')

  await consumer.run({
    eachMessage: async ({
      topic,
      partition,
      message
    }: {
      topic: any
      partition: any
      message: any
    }) => {
      console.log(`topic:${topic},partition:${partition}🪂`)
      console.log(message.value.toString())

      const { event, value } = JSON.parse(message.value.toString())

      emitter.emit(event, value)
    }
  })
}

export const emit = async (event: string, value: any) => {
  const producer = kafka.producer()

  await producer.connect()

  await producer.send({
    topic: 'yape-topic',
    messages: [{ value: JSON.stringify({ event, value }) }]
  })

  await producer.disconnect()
}
