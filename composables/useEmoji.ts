export const useEmoji = () => {
  const emojiState = useState('emojiState', () => '🥲')

  return { emojiState }
}
