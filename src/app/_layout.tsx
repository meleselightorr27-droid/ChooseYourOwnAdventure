import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="one" options={{ title: 'one' }} />
      <Stack.Screen name="two" options={{ title: 'two' }} />
      <Stack.Screen name="three" options={{ title: 'three' }} />
      <Stack.Screen name="four" options={{ title: 'four' }} />
      <Stack.Screen name="five" options={{ title: 'five' }} />
      <Stack.Screen name="six" options={{ title: 'six' }} />
      <Stack.Screen name="seven" options={{ title: 'seven' }} />
      <Stack.Screen name="eight" options={{ title: 'eight' }} />
      <Stack.Screen name="nine" options={{ title: 'nine' }} />
      <Stack.Screen name="ten" options={{ title: 'ten' }} />
      <Stack.Screen name="eleven" options={{ title: 'eleven' }} />
      <Stack.Screen name="twelve" options={{ title: 'twelve' }} />
      <Stack.Screen name="thirteen" options={{ title: 'thirteen' }} />
      <Stack.Screen name="fourteen" options={{ title: 'fourteen' }} />
      <Stack.Screen name="fifteen" options={{ title: 'fifteen' }} />
      <Stack.Screen name="sixteen" options={{ title: 'sixteen' }} />
      <Stack.Screen name="seventeen" options={{ title: 'seventeen' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}