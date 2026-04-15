/**
 * SeniorTech Academy - 25 Lesson Master Curriculum
 * Master Prompt Guide Integrated
 */

export const LESSONS = [
  // ==========================================
  // CATEGORY: ESSENTIALS (COMMUNICATION)
  // ==========================================
  {
    id: "call",
    category: "Essentials",
    title: "Make a Phone Call",
    description: "Learn to dial numbers and call your loved ones.",
    badge: "Voice Connector",
    icon: "📞",
    img: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800",
    steps: [
      { 
        text: "Tap the green Phone icon.", 
        speak: "Senior's finger tapping a green Phone icon on a smartphone home screen, yellow arrow pointing.", 
        prompt: "Senior's finger tapping a green Phone icon on a smartphone home screen, yellow arrow pointing.", 
        img: "/images/steps/lesson_call_step_1.png" 
      },
      { 
        text: "Open the Keypad.", 
        speak: "Phone app screen, large dots icon titled Keypad being tapped, yellow arrow pointing.", 
        prompt: "Phone app screen, large dots icon titled Keypad being tapped, yellow arrow pointing.", 
        img: "/images/steps/lesson_call_step_2.png" 
      },
      { 
        text: "Dial the number.", 
        speak: "White dialer screen with large numbers 1-9, finger pressing '5', yellow arrow pointing.", 
        prompt: "White dialer screen with large numbers 1-9, finger pressing '5', yellow arrow pointing.", 
        img: "/images/steps/lesson_call_step_3.png" 
      },
      { 
        text: "Press the Green Call button.", 
        speak: "Dialer screen with number typed, finger tapping large circular green call button, yellow arrow pointing.", 
        prompt: "Dialer screen with number typed, finger tapping large circular green call button, yellow arrow pointing.", 
        img: "/images/steps/lesson_call_step_4.png" 
      }
    ],
    quiz: { question: "Which color button starts a call?", options: ["Red", "Green", "Blue", "Black"], answer: 1 }
  },
  {
    id: "text",
    category: "Essentials",
    title: "Send a Text Message",
    description: "Write quick messages without needing to talk.",
    badge: "Texting Pro",
    icon: "💬",
    img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap the speech bubble icon.", speak: "Smartphone home screen, finger tapping blue speech bubble icon, yellow arrow pointing.", prompt: "Smartphone home screen, finger tapping blue speech bubble icon, yellow arrow pointing.", img: "/images/steps/lesson_text_step_1.png" },
      { text: "Tap the 'New Message' icon.", speak: "Messages app interface, square icon with pencil being tapped, yellow arrow pointing.", prompt: "Messages app interface, square icon with pencil being tapped, yellow arrow pointing.", img: "/images/steps/lesson_text_step_2.png" },
      { text: "Enter a contact name.", speak: "Message screen, contact name being typed in 'To' field, yellow arrow pointing.", prompt: "Message screen, contact name being typed in 'To' field, yellow arrow pointing.", img: "/images/steps/lesson_text_step_3.png" },
      { text: "Type message and tap Send.", speak: "Message typed in chat box, blue arrow send icon being tapped, yellow arrow pointing.", prompt: "Message typed in chat box, blue arrow send icon being tapped, yellow arrow pointing.", img: "/images/steps/lesson_text_step_4.png" }
    ],
    quiz: { question: "What does the blue arrow icon do?", options: ["Delete", "Minimize", "Send", "Rotate"], answer: 2 }
  },
  {
    id: "contacts",
    category: "Essentials",
    title: "Add a New Contact",
    description: "Save people's names so you never lose them.",
    badge: "Social Butterfly",
    icon: "👤",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap the Contacts icon.", speak: "Home screen, finger tapping person icon titled 'Contacts', yellow arrow pointing.", prompt: "Home screen, finger tapping person icon titled 'Contacts', yellow arrow pointing.", img: "/images/steps/lesson_contacts_step_1.png" },
      { text: "Tap the '+' icon.", speak: "Contacts list, large '+' icon being tapped, yellow arrow pointing.", prompt: "Contacts list, large '+' icon being tapped, yellow arrow pointing.", img: "/images/steps/lesson_contacts_step_2.png" },
      { text: "Type their name.", speak: "Edit contact screen, name field being filled, yellow arrow pointing.", prompt: "Edit contact screen, name field being filled, yellow arrow pointing.", img: "/images/steps/lesson_contacts_step_3.png" },
      { text: "Type their number and Save.", speak: "Edit contact screen, phone number field being filled, yellow arrow pointing.", prompt: "Edit contact screen, phone number field being filled, yellow arrow pointing.", img: "/images/steps/lesson_contacts_step_4.png" }
    ],
    quiz: { question: "Which icon adds a new person?", options: ["+", "-", "x", "!"], answer: 0 }
  },
  {
    id: "block",
    category: "Essentials",
    title: "Block a Caller",
    description: "Stop annoying telemarketers from calling you.",
    badge: "Silence Master",
    icon: "🚫",
    img: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Go to Recents.", speak: "Phone app, 'Recents' tab being tapped, yellow arrow pointing.", prompt: "Phone app, 'Recents' tab being tapped, yellow arrow pointing.", img: "/images/steps/lesson_block_step_1.png" },
      { text: "Tap 'Block this Caller'.", speak: "Contact info screen, red 'Block this Caller' text being tapped, yellow arrow pointing.", prompt: "Contact info screen, red 'Block this Caller' text being tapped, yellow arrow pointing.", img: "/images/steps/lesson_block_step_2.png" }
    ],
    quiz: { question: "What color is the block button?", options: ["Green", "Blue", "Red", "Gray"], answer: 2 }
  },
  {
    id: "location",
    category: "Essentials",
    title: "Share Your Location",
    description: "Let family members see where you are for safety.",
    badge: "Always Safe",
    icon: "📍",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap 'Share My Current Location'.", speak: "Contact details, blue 'Share My Current Location' being tapped, yellow arrow pointing.", prompt: "Contact details, blue 'Share My Current Location' being tapped, yellow arrow pointing.", img: "/images/steps/lesson_location_step_1.png" },
      { text: "Choose time duration.", speak: "Location options pop-up, tapping 'Share for One Hour', yellow arrow pointing.", prompt: "Location options pop-up, tapping 'Share for One Hour', yellow arrow pointing.", img: "/images/steps/lesson_location_step_2.png" }
    ],
    quiz: { question: "How long should you share your location?", options: ["1 minute", "1 hour", "1 second", "Forever"], answer: 1 }
  },

  // ==========================================
  // CATEGORY: SAFETY & SECURITY
  // ==========================================
  {
    id: "scam",
    category: "Safety",
    title: "Spot a Scam Text",
    description: "Identify and avoid dangerous phishing links.",
    badge: "Scam Spotter",
    icon: "🕵️",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Look for urgent alerts.", speak: "Text message saying 'ALERT: Bank account frozen!', yellow arrow pointing to 'ALERT'.", prompt: "Text message saying 'ALERT: Bank account frozen!', yellow arrow pointing to 'ALERT'.", img: "/images/steps/lesson_scam_step_1.png" },
      { text: "Check for weird links.", speak: "Text message with a link like 'bit.ly/scam-me', yellow arrow pointing to the link.", prompt: "Text message with a link like 'bit.ly/scam-me', yellow arrow pointing to the link.", img: "/images/steps/lesson_scam_step_2.png" },
      { text: "Swipe to delete.", speak: "Text message thread, swiping left to show 'Delete' button, yellow arrow pointing.", prompt: "Text message thread, swiping left to show 'Delete' button, yellow arrow pointing.", img: "/images/steps/lesson_scam_step_3.png" },
      { text: "Report the junk.", speak: "Text message options, tapping 'Report Junk', yellow arrow pointing.", prompt: "Text message options, tapping 'Report Junk', yellow arrow pointing.", img: "/images/steps/lesson_scam_step_4.png" }
    ],
    quiz: { question: "What is a sign of a scam text?", options: ["Greeting", "Urgent Alert", "Photo", "Emoji"], answer: 1 }
  },
  {
    id: "pin",
    category: "Safety",
    title: "Lock Screen PIN",
    description: "Secure your phone so only you can open it.",
    badge: "Gatekeeper",
    icon: "🔒",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Go to Passcode settings.", speak: "Settings list, 'Face ID & Passcode' being tapped, yellow arrow pointing.", prompt: "Settings list, 'Face ID & Passcode' being tapped, yellow arrow pointing.", img: "/images/steps/lesson_pin_step_1.png" },
      { text: "Tap 'Turn Passcode On'.", speak: "Settings screen, blue 'Turn Passcode On' being tapped, yellow arrow pointing.", prompt: "Settings screen, blue 'Turn Passcode On' being tapped, yellow arrow pointing.", img: "/images/steps/lesson_pin_step_2.png" },
      { text: "Type your code.", speak: "Passcode entry screen, typing numbers, yellow arrow pointing.", prompt: "Passcode entry screen, typing numbers, yellow arrow pointing.", img: "/images/steps/lesson_pin_step_3.png" },
      { text: "Confirm your code.", speak: "Passcode confirm screen, typing numbers again, yellow arrow pointing.", prompt: "Passcode confirm screen, typing numbers again, yellow arrow pointing.", img: "/images/steps/lesson_pin_step_4.png" }
    ],
    quiz: { question: "How many times do you type the code to set it?", options: ["1", "2", "3", "0"], answer: 1 }
  },
  {
    id: "sos",
    category: "Safety",
    title: "Emergency SOS",
    description: "Quickly call for help in an emergency.",
    badge: "Safety Pro",
    icon: "🆘",
    img: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Go to Emergency SOS.", speak: "Settings list, 'Emergency SOS' being tapped, yellow arrow pointing.", prompt: "Settings list, 'Emergency SOS' being tapped, yellow arrow pointing.", img: "/images/steps/lesson_sos_step_1.png" },
      { text: "Enable 'Call with Hold'.", speak: "SOS settings, flipping switch for 'Call with Hold', yellow arrow pointing.", prompt: "SOS settings, flipping switch for 'Call with Hold', yellow arrow pointing.", img: "/images/steps/lesson_sos_step_2.png" },
      { text: "Add Emergency Contact.", speak: "Medical ID screen, tapping 'Add Emergency Contact', yellow arrow pointing.", prompt: "Medical ID screen, tapping 'Add Emergency Contact', yellow arrow pointing.", img: "/images/steps/lesson_sos_step_3.png" },
      { text: "Press power button 5 times.", speak: "Hand clicking the side power button 5 times, yellow arrow pointing.", prompt: "Hand clicking the side power button 5 times, yellow arrow pointing.", img: "/images/steps/lesson_sos_step_4.png" }
    ],
    quiz: { question: "How many times do you click for SOS?", options: ["3", "5", "10", "1"], answer: 1 }
  },
  {
    id: "findmy",
    category: "Safety",
    title: "Find My Phone",
    description: "Locate your device if it's lost or misplaced.",
    badge: "Locator Expert",
    icon: "📱",
    img: "https://images.unsplash.com/photo-1512428559083-a401c4d19b4e?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap your profile name.", speak: "Settings menu, tapping the user profile name at top, yellow arrow pointing.", prompt: "Settings menu, tapping the user profile name at top, yellow arrow pointing.", img: "/images/steps/lesson_findmy_step_1.png" },
      { text: "Tap 'Find My'.", speak: "Account settings list, tapping 'Find My', yellow arrow pointing.", prompt: "Account settings list, tapping 'Find My', yellow arrow pointing.", img: "/images/steps/lesson_findmy_step_2.png" },
      { text: "Flip toggle to green.", speak: "Find My screen, flipping toggle to green, yellow arrow pointing.", prompt: "Find My screen, flipping toggle to green, yellow arrow pointing.", img: "/images/steps/lesson_findmy_step_3.png" },
      { text: "Enable 'Send Last Location'.", speak: "Find My sub-menu, flipping 'Send Last Location' to ON, yellow arrow pointing.", prompt: "Find My sub-menu, flipping 'Send Last Location' to ON, yellow arrow pointing.", img: "/images/steps/lesson_findmy_step_4.png" }
    ],
    quiz: { question: "What color is the switch when ON?", options: ["Red", "Blue", "Green", "White"], answer: 2 }
  },
  {
    id: "publicwifi",
    category: "Safety",
    title: "Public Wi-Fi Safety",
    description: "Protect your data when using internet at a cafe.",
    badge: "Data Guardian",
    icon: "🌐",
    img: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Avoid banking apps.", speak: "Smartphone shown with a 'Public Wi-Fi' icon and a red stop sign over a banking app.", prompt: "Smartphone shown with a 'Public Wi-Fi' icon and a red stop sign over a banking app.", img: "/images/steps/lesson_publicwifi_step_1.png" },
      { text: "Look for 'Not Secure'.", speak: "Browser top bar showing 'Not Secure' in red, yellow arrow pointing.", prompt: "Browser top bar showing 'Not Secure' in red, yellow arrow pointing.", img: "/images/steps/lesson_publicwifi_step_2.png" },
      { text: "Turn off Auto-Join.", speak: "Wi-Fi settings, tapping blue 'i' for public net and turning off 'Auto-Join', yellow arrow pointing.", prompt: "Wi-Fi settings, tapping blue 'i' for public net and turning off 'Auto-Join', yellow arrow pointing.", img: "/images/steps/lesson_publicwifi_step_3.png" },
      { text: "Use Cellular Data.", speak: "Control center, tapping the green 'Cellular' icon, yellow arrow pointing.", prompt: "Control center, tapping the green 'Cellular' icon, yellow arrow pointing.", img: "/images/steps/lesson_publicwifi_step_4.png" }
    ],
    quiz: { question: "Is shopping on public Wi-Fi safe?", options: ["Yes", "No", "Always", "Maybe"], answer: 1 }
  },

  // ==========================================
  // CATEGORY: MEDIA & MEMORIES
  // ==========================================
  {
    id: "camera",
    category: "Media",
    title: "Take a Photo",
    description: "Capture beautiful moments with your camera.",
    badge: "Shutterbug",
    icon: "📷",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Open the Camera.", speak: "Home screen, tapping gray Camera icon, yellow arrow pointing.", prompt: "Home screen, tapping gray Camera icon, yellow arrow pointing.", img: "/images/steps/lesson_camera_step_1.png" },
      { text: "Aim at the subject.", speak: "Hand holding phone, aiming at a clear subject, yellow arrow pointing to screen.", prompt: "Hand holding phone, aiming at a clear subject, yellow arrow pointing to screen.", img: "/images/steps/lesson_camera_step_2.png" },
      { text: "Tap the white button.", speak: "Camera interface, tapping large white shutter button, yellow arrow pointing.", prompt: "Camera interface, tapping large white shutter button, yellow arrow pointing.", img: "/images/steps/lesson_camera_step_3.png" },
      { text: "Tap the preview.", speak: "Camera screen, tapping small square preview in corner, yellow arrow pointing.", prompt: "Camera screen, tapping small square preview in corner, yellow arrow pointing.", img: "/images/steps/lesson_camera_step_4.png" }
    ],
    quiz: { question: "What color is the shutter button?", options: ["Red", "White", "Blue", "Black"], answer: 1 }
  },
  {
    id: "video",
    category: "Media",
    title: "Record a Video",
    description: "Record moving memories of your family.",
    badge: "Movie Director",
    icon: "📹",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Swipe to 'Video'.", speak: "Camera interface, finger swiping across 'Photo/Video' labels, yellow arrow pointing.", prompt: "Camera interface, finger swiping across 'Photo/Video' labels, yellow arrow pointing.", img: "/images/steps/lesson_video_step_1.png" },
      { text: "Tap the red button.", speak: "Camera in video mode, finger tapping red circular button, yellow arrow pointing.", prompt: "Camera in video mode, finger tapping red circular button, yellow arrow pointing.", img: "/images/steps/lesson_video_step_2.png" },
      { text: "Record the timer.", speak: "Phone recording video, red timer visible at top, yellow arrow pointing.", prompt: "Phone recording video, red timer visible at top, yellow arrow pointing.", img: "/images/steps/lesson_video_step_3.png" },
      { text: "Tap button to stop.", speak: "Recording screen, tapping red square/circle button to stop, yellow arrow pointing.", prompt: "Recording screen, tapping red square/circle button to stop, yellow arrow pointing.", img: "/images/steps/lesson_video_step_4.png" }
    ],
    quiz: { question: "Which color button starts a video?", options: ["Green", "Blue", "Red", "Yellow"], answer: 2 }
  },
  {
    id: "gallery",
    category: "Media",
    title: "Browse Gallery",
    description: "View and organize your captured memories.",
    badge: "Memory Master",
    icon: "🖼️",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap the Photos icon.", speak: "Home screen, tapping colorful 'Photos' flower icon, yellow arrow pointing.", prompt: "Home screen, tapping colorful 'Photos' flower icon, yellow arrow pointing.", img: "/images/steps/lesson_gallery_step_1.png" },
      { text: "Swipe up to scroll.", speak: "Photos grid view, finger swiping up, yellow arrow pointing.", prompt: "Photos grid view, finger swiping up, yellow arrow pointing.", img: "/images/steps/lesson_gallery_step_2.png" },
      { text: "Tap a picture.", speak: "Grid view, finger tapping a small picture, yellow arrow pointing.", prompt: "Grid view, finger tapping a small picture, yellow arrow pointing.", img: "/images/steps/lesson_gallery_step_3.png" },
      { text: "Swipe left/right.", speak: "Full-screen photo, finger swiping left, yellow arrow pointing.", prompt: "Full-screen photo, finger swiping left, yellow arrow pointing.", img: "/images/steps/lesson_gallery_step_4.png" }
    ],
    quiz: { question: "How do you view the next photo?", options: ["Shake", "Swipe", "Clap", "Tap"], answer: 1 }
  },
  {
    id: "whatsapp",
    category: "Media",
    title: "Share via WhatsApp",
    description: "Send pictures instantly to your family group.",
    badge: "Sharing Hero",
    icon: "📤",
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap the share icon.", speak: "Full-screen photo view, tapping the share icon (square with arrow), yellow arrow pointing.", prompt: "Full-screen photo view, tapping the share icon (square with arrow), yellow arrow pointing.", img: "/images/steps/lesson_whatsapp_step_1.png" },
      { text: "Tap WhatsApp icon.", speak: "Share menu pop-up, tapping the green 'WhatsApp' icon, yellow arrow pointing.", prompt: "Share menu pop-up, tapping the green 'WhatsApp' icon, yellow arrow pointing.", img: "/images/steps/lesson_whatsapp_step_2.png" },
      { text: "Select a contact.", speak: "WhatsApp contact list, tapping a family member's name, yellow arrow pointing.", prompt: "WhatsApp contact list, tapping a family member's name, yellow arrow pointing.", img: "/images/steps/lesson_whatsapp_step_3.png" },
      { text: "Tap the Send arrow.", speak: "WhatsApp send screen, tapping blue 'Send' arrow, yellow arrow pointing.", prompt: "WhatsApp send screen, tapping blue 'Send' arrow, yellow arrow pointing.", img: "/images/steps/lesson_whatsapp_step_4.png" }
    ],
    quiz: { question: "What color is the WhatsApp icon?", options: ["Blue", "Red", "Green", "Pink"], answer: 2 }
  },
  {
    id: "edit",
    category: "Media",
    title: "Edit a Photo",
    description: "Brighten or crop your photos to look better.",
    badge: "Photo Artist",
    icon: "✂️",
    img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap 'Edit'.", speak: "Full-screen photo, tapping 'Edit' at top right, yellow arrow pointing.", prompt: "Full-screen photo, tapping 'Edit' at top right, yellow arrow pointing.", img: "/images/steps/lesson_edit_step_1.png" },
      { text: "Tap 'Auto' wand.", speak: "Edit interface, tapping magic wand 'Auto' icon, yellow arrow pointing.", prompt: "Edit interface, tapping magic wand 'Auto' icon, yellow arrow pointing.", img: "/images/steps/lesson_edit_step_2.png" },
      { text: "Tap 'Crop' squares.", speak: "Edit interface, tapping 'Crop' squares icon, yellow arrow pointing.", prompt: "Edit interface, tapping 'Crop' squares icon, yellow arrow pointing.", img: "/images/steps/lesson_edit_step_3.png" },
      { text: "Tap 'Done'.", speak: "Edit screen, tapping 'Done' at bottom right, yellow arrow pointing.", prompt: "Edit screen, tapping 'Done' at bottom right, yellow arrow pointing.", img: "/images/steps/lesson_edit_step_4.png" }
    ],
    quiz: { question: "Which button saves your edits?", options: ["Cancel", "Refresh", "Done", "Back"], answer: 2 }
  },

  // ==========================================
  // CATEGORY: INTERNET & CONNECTIVITY
  // ==========================================
  {
    id: "wifi",
    category: "Internet",
    title: "Connect Wi-Fi",
    description: "Get free, fast internet at home.",
    badge: "Connected!",
    icon: "🔗",
    img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap Settings gear.", speak: "Home screen, tapping Settings gear icon, yellow arrow pointing.", prompt: "Home screen, tapping Settings gear icon, yellow arrow pointing.", img: "/images/steps/lesson_wifi_step_1.png" },
      { text: "Tap Wi-Fi.", speak: "Settings list, 'Wi-Fi' being tapped, yellow arrow pointing.", prompt: "Settings list, 'Wi-Fi' being tapped, yellow arrow pointing.", img: "/images/steps/lesson_wifi_step_2.png" },
      { text: "Flip toggle to green.", speak: "Wi-Fi settings, flipping toggle switch to green, yellow arrow pointing.", prompt: "Wi-Fi settings, flipping toggle switch to green, yellow arrow pointing.", img: "/images/steps/lesson_wifi_step_3.png" },
      { text: "Select your network.", speak: "Wi-Fi list, tapping a network name, yellow arrow pointing.", prompt: "Wi-Fi list, tapping a network name, yellow arrow pointing.", img: "/images/steps/lesson_wifi_step_4.png" }
    ],
    quiz: { question: "What icon represent Settings?", options: ["Sun", "Gear", "Cloud", "Apple"], answer: 1 }
  },
  {
    id: "searching",
    category: "Internet",
    title: "Safe Searching",
    description: "Search for cooking recipes or health tips safely.",
    badge: "Search Master",
    icon: "🔍",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap Chrome icon.", speak: "Home screen, tapping colorful Chrome circle, yellow arrow pointing.", prompt: "Home screen, tapping colorful Chrome circle, yellow arrow pointing.", img: "/images/steps/lesson_searching_step_1.png" },
      { text: "Tap address bar.", speak: "Browser empty page, tapping address bar, yellow arrow pointing.", prompt: "Browser empty page, tapping address bar, yellow arrow pointing.", img: "/images/steps/lesson_searching_step_2.png" },
      { text: "Type your query.", speak: "Keyboard visible, typing into search bar, yellow arrow pointing.", prompt: "Keyboard visible, typing into search bar, yellow arrow pointing.", img: "/images/steps/lesson_searching_step_3.png" },
      { text: "Tap 'Go' button.", speak: "Keyboard showing blue 'Go' button being tapped, yellow arrow pointing.", prompt: "Keyboard showing blue 'Go' button being tapped, yellow arrow pointing.", img: "/images/steps/lesson_searching_step_4.png" }
    ],
    quiz: { question: "What color is the search/go button usually?", options: ["Blue", "Red", "Gray", "Yellow"], answer: 0 }
  },
  {
    id: "bookmark",
    category: "Internet",
    title: "Saving a Bookmark",
    description: "Add a favorite recipe site to your bookmarks.",
    badge: "Collector",
    icon: "🔖",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap share icon.", speak: "Browser showing a website, tapping the share icon.", prompt: "Browser showing a website, tapping the share icon.", img: "/images/steps/lesson_bookmark_step_1.png" },
      { text: "Find 'Add Bookmark'.", speak: "Share icons list, scrolling down to find 'Add Bookmark'.", prompt: "Share icons list, scrolling down to find 'Add Bookmark'.", img: "/images/steps/lesson_bookmark_step_2.png" },
      { text: "Tap Star icon.", speak: "Menu window, finger tapping 'Add Bookmark' star icon, yellow arrow pointing.", prompt: "Menu window, finger tapping 'Add Bookmark' star icon, yellow arrow pointing.", img: "/images/steps/lesson_bookmark_step_3.png" },
      { text: "Tap Save.", speak: "Confirmation screen, tapping 'Save' at top right, yellow arrow pointing.", prompt: "Confirmation screen, tapping 'Save' at top right, yellow arrow pointing.", img: "/images/steps/lesson_bookmark_step_4.png" }
    ],
    quiz: { question: "What shape is the bookmark icon usually?", options: ["Circle", "Star", "Square", "Triangle"], answer: 1 }
  },
  {
    id: "email",
    category: "Internet",
    title: "Check Email",
    description: "Read messages from your bank or friends.",
    badge: "Postman",
    icon: "📧",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap Envelope icon.", speak: "Home screen, tapping blue/white envelope Mail icon, yellow arrow pointing.", prompt: "Home screen, tapping blue/white envelope Mail icon, yellow arrow pointing.", img: "/images/steps/lesson_email_step_1.png" },
      { text: "Point to top message.", speak: "Mail app screen, finger pointing to top message in list, yellow arrow pointing.", prompt: "Mail app screen, finger pointing to top message in list, yellow arrow pointing.", img: "/images/steps/lesson_email_step_2.png" },
      { text: "Tap preview.", speak: "Email list, tapping on a message preview, yellow arrow pointing.", prompt: "Email list, tapping on a message preview, yellow arrow pointing.", img: "/images/steps/lesson_email_step_3.png" },
      { text: "Swipe to delete.", speak: "Email list, swiping left on a message to show red 'Trash', yellow arrow pointing.", prompt: "Email list, swiping left on a message to show red 'Trash', yellow arrow pointing.", img: "/images/steps/lesson_email_step_4.png" }
    ],
    quiz: { question: "Which icon means Mail?", options: ["Camera", "Envelope", "Phone", "Notes"], answer: 1 }
  },
  {
    id: "data",
    category: "Internet",
    title: "Data Management",
    description: "Make sure you don't use too much phone data.",
    badge: "Thrifty User",
    icon: "📈",
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap 'Cellular'.", speak: "Settings list, 'Cellular' or 'Mobile Data' being tapped, yellow arrow pointing.", prompt: "Settings list, 'Cellular' or 'Mobile Data' being tapped, yellow arrow pointing.", img: "/images/steps/lesson_data_step_1.png" },
      { text: "Tap 'Data Saver'.", speak: "Cellular settings, tapping 'Data Saver' or 'Low Data Mode', yellow arrow pointing.", prompt: "Cellular settings, tapping 'Data Saver' or 'Low Data Mode', yellow arrow pointing.", img: "/images/steps/lesson_data_step_2.png" },
      { text: "Turn off Refresh.", speak: "Settings -> General -> Background App Refresh, flipping to OFF.", prompt: "Settings -> General -> Background App Refresh, flipping to OFF.", img: "/images/steps/lesson_data_step_3.png" },
      { text: "Download on Wi-Fi.", speak: "YouTube app settings, tapping 'Download only on Wi-Fi', yellow arrow pointing.", prompt: "YouTube app settings, tapping 'Download only on Wi-Fi', yellow arrow pointing.", img: "/images/steps/lesson_data_step_4.png" }
    ],
    quiz: { question: "What should you use for big downloads?", options: ["Public Wi-Fi", "Home Wi-Fi", "Cellular Data", "None"], answer: 1 }
  },

  // ==========================================
  // CATEGORY: SMART TOOLS
  // ==========================================
  {
    id: "alarm",
    category: "Tools",
    title: "Set an Alarm",
    description: "Never miss an appointment or pill time.",
    badge: "Punctual",
    icon: "⏰",
    img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap Clock icon.", speak: "Home screen, tapping Clock icon, yellow arrow pointing.", prompt: "Home screen, tapping Clock icon, yellow arrow pointing.", img: "/images/steps/lesson_alarm_step_1.png" },
      { text: "Tap 'Alarm' tab.", speak: "Clock interface, tapping 'Alarm' at bottom, yellow arrow pointing.", prompt: "Clock interface, tapping 'Alarm' at bottom, yellow arrow pointing.", img: "/images/steps/lesson_alarm_step_2.png" },
      { text: "Tap '+' icon.", speak: "Alarm list, tapping '+' at top right, yellow arrow pointing.", prompt: "Alarm list, tapping '+' at top right, yellow arrow pointing.", img: "/images/steps/lesson_alarm_step_3.png" },
      { text: "Drag the wheel.", speak: "Time picker wheels spinning, finger dragging wheel, yellow arrow pointing.", prompt: "Time picker wheels spinning, finger dragging wheel, yellow arrow pointing.", img: "/images/steps/lesson_alarm_step_4.png" }
    ],
    quiz: { question: "Which app sets wake-up calls?", options: ["Maps", "Clock", "Music", "Notes"], answer: 1 }
  },
  {
    id: "calculator",
    category: "Tools",
    title: "Use Calculator",
    description: "Check your grocery total or split a bill.",
    badge: "Math Pro",
    icon: "🧮",
    img: "https://images.unsplash.com/photo-1587145820266-a5951ee6f677?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap Math icon.", speak: "Home screen, tapping icon with '+ - = x' signs, yellow arrow pointing.", prompt: "Home screen, tapping icon with '+ - = x' signs, yellow arrow pointing.", img: "/images/steps/lesson_calculator_step_1.png" },
      { text: "Press '7'.", speak: "Calculator app, finger pressing '7', yellow arrow pointing.", prompt: "Calculator app, finger pressing '7', yellow arrow pointing.", img: "/images/steps/lesson_calculator_step_2.png" },
      { text: "Press '+'.", speak: "Calculator app, finger pressing orange '+' button, yellow arrow pointing.", prompt: "Calculator app, finger pressing orange '+' button, yellow arrow pointing.", img: "/images/steps/lesson_calculator_step_3.png" },
      { text: "Press '='.", speak: "Calculator app, finger pressing orange '=' button, yellow arrow pointing.", prompt: "Calculator app, finger pressing orange '=' button, yellow arrow pointing.", img: "/images/steps/lesson_calculator_step_4.png" }
    ],
    quiz: { question: "What color is the '+' button usually?", options: ["Blue", "Green", "Orange", "Black"], answer: 2 }
  },
  {
    id: "brightness",
    category: "Tools",
    title: "Brightness & Volume",
    description: "Make the screen easier to see and hear.",
    badge: "Customizer",
    icon: "🔆",
    img: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Swipe down top-right.", speak: "Hand swiping down from the top right edge of a smartphone screen.", prompt: "Hand swiping down from the top right edge of a smartphone screen.", img: "/images/steps/lesson_brightness_step_1.png" },
      { text: "Drag Sun icon.", speak: "Control center, finger dragging the sun icon slider up, yellow arrow pointing.", prompt: "Control center, finger dragging the sun icon slider up, yellow arrow pointing.", img: "/images/steps/lesson_brightness_step_2.png" },
      { text: "Drag Speaker icon.", speak: "Control center, finger dragging speaker icon slider up, yellow arrow pointing.", prompt: "Control center, finger dragging speaker icon slider up, yellow arrow pointing.", img: "/images/steps/lesson_brightness_step_3.png" },
      { text: "Tap Silent icon.", speak: "Control center, tapping the bell/silent icon, yellow arrow pointing.", prompt: "Control center, tapping the bell/silent icon, yellow arrow pointing.", img: "/images/steps/lesson_brightness_step_4.png" }
    ],
    quiz: { question: "What does the Sun icon control?", options: ["Volume", "Brightness", "Signal", "Weather"], answer: 1 }
  },
  {
    id: "magnifier",
    category: "Tools",
    title: "Magnifier Tool",
    description: "Use your phone to read small text on bottles.",
    badge: "Eagle Eyed",
    icon: "🔍",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Tap Magnifier icon.", speak: "Home screen, tapping icon with magnifying glass and plus sign, yellow arrow pointing.", prompt: "Home screen, tapping icon with magnifying glass and plus sign, yellow arrow pointing.", img: "/images/steps/lesson_magnifier_step_1.png" },
      { text: "Point at text.", speak: "Phone shown magnifying small text on a bottle, yellow arrow pointing to screen.", prompt: "Phone shown magnifying small text on a bottle, yellow arrow pointing to screen.", img: "/images/steps/lesson_magnifier_step_2.png" },
      { text: "Drag Zoom slider.", speak: "Magnifier interface, finger dragging zoom slider to the right, yellow arrow pointing.", prompt: "Magnifier interface, finger dragging zoom slider to the right, yellow arrow pointing.", img: "/images/steps/lesson_magnifier_step_3.png" },
      { text: "Tap Freeze button.", speak: "Magnifier interface, finger tapping circular freeze button, yellow arrow pointing.", prompt: "Magnifier interface, finger tapping circular freeze button, yellow arrow pointing.", img: "/images/steps/lesson_magnifier_step_4.png" }
    ],
    quiz: { question: "What does the slider do?", options: ["Changes color", "Zooms in/out", "Saves photo", "Closes app"], answer: 1 }
  },
  {
    id: "voice",
    category: "Tools",
    title: "Voice Assistant",
    description: "Just say 'Hey Google' or 'Siri' for help.",
    badge: "Voice Pilot",
    icon: "🎙️",
    img: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&q=80&w=800",
    steps: [
      { text: "Turn on Siri/Google.", speak: "Settings -> Siri/Google Assistant, flipping 'Listen for' to ON.", prompt: "Settings -> Siri/Google Assistant, flipping 'Listen for' to ON.", img: "/images/steps/lesson_voice_step_1.png" },
      { text: "Speak to phone.", speak: "Illustration of person speaking to phone, sound waves coming from phone.", prompt: "Illustration of person speaking to phone, sound waves coming from phone.", img: "/images/steps/lesson_voice_step_2.png" },
      { text: "Ask the weather.", speak: "Phone screen showing weather animation after being asked a question.", prompt: "Phone screen showing weather animation after being asked a question.", img: "/images/steps/lesson_voice_step_3.png" },
      { text: "Set an alarm.", speak: "Phone screen showing an alarm set notification after a voice command.", prompt: "Phone screen showing an alarm set notification after a voice command.", img: "/images/steps/lesson_voice_step_4.png" }
    ],
    quiz: { question: "How do you start the assistant?", options: ["Whistle", "Voice command", "Clap", "Double tap"], answer: 1 }
  }
];
