import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Typing effect properties
  phrases: string[] = [
    'Speech recognition is transforming industries.',
    'Learn how AI can help you automate tasks.',
    'AI is the future of technology.',
    'Speech-to-text is revolutionizing accessibility.',
    'Embrace the power of AI today!'
  ];
  phraseIndex: number = 0;
  charIndex: number = 0;
  typingInterval: any;
  isDeleting = false;
  delayBetweenWords = 2000; // 2-second delay before deleting

  // Cards data
  cards: { title: string, description: string, imageUrl: string }[] = [
    {
      title: 'Image Generation',
      description: 'Type text or speak to create your favourate image',
      imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhv5_RokxzslQf-LEB_8ZO76IziRqkrJnWBJBC03BvcNgIDTn9_ypSwQ-EboYOVRSCQKaNyOLTwFYVy2NfasMm16qozIfeqP0a-FdgyJThwWkvEAbXUi-r-KEPlnQ1zpo-yt_e1Id557rjwcgYg79z669P6lHtqo2GK_g6Snu4BrGvT1F5n-JeDpKFAEA/s1600-rw/WHALE-SKY-AI-1102023TB.png'
    },
    {
      title: 'Speech',
      description: 'Speech to text translation and speech to speech translation',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Text',
      description: 'Text to text translation and text to speech translation',
      imageUrl: 'https://img.freepik.com/premium-photo/ai-technology-wallpaper-art_1106493-22379.jpg'
    }
  ];

  currentCardIndex = 0;
  cardInterval: any;

  // Typing text element
  typingText: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTypingEffect();
      this.startCardRotation();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.typingInterval);
      clearInterval(this.cardInterval);
    }
  }

  startTypingEffect() {
    if (!isPlatformBrowser(this.platformId)) return;
  
    const typeAndDelete = () => {
      if (!this.isDeleting) {
        // Typing logic
        if (this.charIndex < this.phrases[this.phraseIndex].length) {
          this.typingText += this.phrases[this.phraseIndex][this.charIndex]; // Directly add characters without converting spaces to &nbsp;
          this.charIndex++;
        } else {
          // Wait before deleting
          this.isDeleting = true;
          setTimeout(typeAndDelete, this.delayBetweenWords);
          return;
        }
      } else {
        // Deleting logic
        if (this.charIndex > 0) {
          this.charIndex--;
          this.typingText = this.phrases[this.phraseIndex].substring(0, this.charIndex);
        } else {
          // Move to the next phrase after deleting
          this.isDeleting = false;
          this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
        }
      }
  
      this.typingInterval = setTimeout(typeAndDelete, this.isDeleting ? 10 : 100); // Faster deleting
    };
  
    typeAndDelete(); // Start the effect
  }
  

  startCardRotation() {
    this.cardInterval = setInterval(() => {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
    }, 5000); // Change card every 5 seconds
  }
}
