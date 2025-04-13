// --- Social Media Impact Data ---

// Social media platforms
let platform1 = "Instagram";
let platform2 = "TikTok";
let platform3 = "Twitter";

// Average screen time (hours per day)
let screenTimeInstagram = 2.5;
let screenTimeTikTok = 3.2;
let screenTimeTwitter = 1.8;

// Calculate total weekly screen time
let totalWeeklyScreenTime = (screenTimeInstagram + screenTimeTikTok + screenTimeTwitter) * 7;

// Anxiety and depression impact
let anxietyPercentage = 65;
let depressionPercentage = 50;

// Display platform data
document.getElementById("platforms").innerHTML = `Popular Platforms: ${platform1}, ${platform2}, ${platform3}`;
document.getElementById("weekly-screen-time").innerHTML = `Total Weekly Screen Time: ${totalWeeklyScreenTime.toFixed(1)} hours`;
document.getElementById("anxiety-impact").innerHTML = `Anxiety Impact: ${anxietyPercentage}% of users affected.`;
document.getElementById("depression-impact").innerHTML = `Depression Impact: ${depressionPercentage}% of users affected.`;

let impactMessage = `On average, people spend ${totalWeeklyScreenTime.toFixed(1)} hours per week on social media. Studies show that ${anxietyPercentage}% experience anxiety and ${depressionPercentage}% experience depression.`;
document.getElementById("impact-message").innerHTML = impactMessage;

// --- Conditional logic: Screen time usage ---
let usageMessage = "";

if (totalWeeklyScreenTime > 49) {
  usageMessage = "Your weekly screen time is high. Consider taking regular breaks.";
} else if (totalWeeklyScreenTime > 30) {
  usageMessage = "Your screen time is moderate. Try balancing it with offline activities.";
} else {
  usageMessage = "Your screen time is low. Great job maintaining balance!";
}

const usageOutput = document.createElement("p");
usageOutput.textContent = usageMessage;
document.getElementById("social-media-impact").appendChild(usageOutput);

// --- Switch statement: Favorite platform fact ---
let favoritePlatform = platform2; // Example: TikTok
let platformFact = "";

switch (favoritePlatform) {
  case "Instagram":
    platformFact = "Instagram is known for influencer marketing and photo sharing.";
    break;
  case "TikTok":
    platformFact = "TikTok specializes in short viral videos.";
    break;
  case "Twitter":
    platformFact = "Twitter is used for real-time news and trends.";
    break;
  default:
    platformFact = "Select a valid platform to learn more.";
}

const factOutput = document.createElement("p");
factOutput.textContent = `Fun Fact about ${favoritePlatform}: ${platformFact}`;
document.getElementById("social-media-impact").appendChild(factOutput);

// --- Event Listeners ---

// Check screen time
document.getElementById("check-screen-time").addEventListener("click", function () {
  let message = "";

  if (totalWeeklyScreenTime > 49) {
    message = "You are spending a lot of time on social media. Take a break!";
  } else if (totalWeeklyScreenTime > 30) {
    message = "Your screen time is moderate. Stay balanced!";
  } else {
    message = "Nice! Your screen time is healthy.";
  }

  alert(message);
  document.getElementById("screen-time-feedback").textContent = message;
});

// Submit favorite platform
document.getElementById("submit-platform").addEventListener("click", function () {
  let userInput = document.getElementById("favorite-platform-input").value.trim();

  try {
    if (userInput === "") {
      throw "Input cannot be empty. Please enter a platform name.";
    }
    document.getElementById("platform-response").textContent = `Thanks! You entered: ${userInput}`;
  } catch (error) {
    alert(error);
  } finally {
    console.log("Platform input checked.");
  }
});

// Social Media Facts (Next Fact Button)
const socialMediaFacts = [
  "Over 4.48 billion people use social media worldwide.",
  "The average person spends about 2.5 hours daily on social media.",
  "Social media use is linked to increased anxiety and depression.",
  "About 70% of marketers rely on social media engagement.",
  "Facebook has over 2.9 billion users globally."
];

let factIndex = 0;

document.getElementById("next-fact").addEventListener("click", function () {
  let factDisplay = document.getElementById("fact-display");
  factDisplay.innerText = socialMediaFacts[factIndex];
  factIndex = (factIndex + 1) % socialMediaFacts.length;
});

// --- Web Notification API: Send Notification ---
document.getElementById("sendNotification").addEventListener("click", function () {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.trim();

  if (message === "") {
    alert("Please enter a message before sending a notification.");
    return;
  }

  if (!("Notification" in window)) {
    alert("This browser does not support notifications.");
    return;
  }

  if (Notification.permission === "granted") {
    showNotification(message);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification(message);
      }
    });
  }

  messageInput.value = "";
});

// Notification Function
function showNotification(message) {
  new Notification("📢 Social Media Impact Alert", {
    body: message,
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  });
}
