import React from 'react'

const ButtonClickContext = React.createContext({})

export const ButtonClickProvider = ButtonClickContext.Provider
export const ButtonClickConsumer = ButtonClickContext.Consumer