import { NativeTabs } from 'expo-router/native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      tintColor="#3c09e2" 
      backgroundColor="#25292e"
      indicatorColor="rgba(255, 211, 61, 0.2)"
      rippleColor="rgba(255, 211, 61, 0.3)"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'text.book.closed', selected: 'text.book.closed.fill' }} 
           md="book"
        />
      </NativeTabs.Trigger>
      
      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'book', selected: 'book.fill' }} 
           md="menu_book"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="one" hidden />
      <NativeTabs.Trigger name="two" hidden />
      <NativeTabs.Trigger name="three" hidden />
      <NativeTabs.Trigger name="four" hidden />
      <NativeTabs.Trigger name="five" hidden />
      <NativeTabs.Trigger name="six" hidden />
      <NativeTabs.Trigger name="seven" hidden />
      <NativeTabs.Trigger name="eight" hidden />
      <NativeTabs.Trigger name="nine" hidden />
      <NativeTabs.Trigger name="ten" hidden />
      <NativeTabs.Trigger name="eleven" hidden />
      <NativeTabs.Trigger name="twelve" hidden />
      <NativeTabs.Trigger name="thirteen" hidden />
      <NativeTabs.Trigger name="fourteen" hidden />
      <NativeTabs.Trigger name="fifteen" hidden />
      <NativeTabs.Trigger name="sixteen" hidden />
      <NativeTabs.Trigger name="seventeen" hidden />
  
    </NativeTabs>
  );
}