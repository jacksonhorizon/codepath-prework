# PreWork Reflections

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jackson Covey

Time spent: **#** hours spent in total

Link to project: https://glitch.com/edit/#!/cake-ash-loganberry

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Utilizes audio to signal start of the game
- [x] Playback speed increases, although is negligible 
- [x] Clue audio is different than onclick audio
- [x] One of 8 different strike audios are selected randomly when guess is incorrect
- [x] One of 3 audios is selected when game is lost
- [x] Audio is played when game is won

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
In order to use Math.Random in Javascript, I utilized this website's tutorial on how
to use Math.Random to return a random Integer between 0 and the number of buttons I had created. 
By using this returned number + 1, I was able to utilize it in the randomization of my pattern.

[Math.Random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 

I utilized this video in order to add the images I wanted for my buttons.
I then used an application called WavePad in order to isolate
the audios that I wanted to use from said video.

[Bop It Image/Audio](https://www.youtube.com/watch?v=Nk47Unl9Ffk&t=10s)
[WavePad](https://www.nch.com.au/wavepad/index.html)

To use these images/audios in my project, I utilized the links provided by the pre-work assignment page.
However, I figured out how to play said audios using javascript by referencing how document.getElementByID 
worked in the given tutorial.
[Images](https://www.w3schools.com/tags/tag_img.asp)
[Audios](https://www.w3schools.com/html/html5_audio.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The hardest challenge for me was creating the game logic for the guesses. Despite the instructions stating that
nested "if" statements were required, I decided to take a different approach because I did not fully grasp exactly
how progress and guessCounter were interacting with the game. Thus, I decided to check if the guess was wrong, and then
immediately returned (before the addition of strikes). In retrospect, I took the opposite approach to the solution provided.

While the provided solution closely follows the provided diagram, where the first "if" statement checks if the guess is correct, and then continues checking for other conditions, I 
decided to negate the first part of the flow chart. As a result, I ended up with lines 99-110 of my script.js file. While
this solution works, it does require a -1 on line 116 due to the way I incremented guessCounter. 
While I could very easily change my code to match the solution provided, which in my opinion is a better formated solution,
I have decided not to as this was the way I chose to do it initially. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

In terms of my questions about web developement, I have many. Before this pre-work assignment, I had little to no
exposure with html, other than what my peers had briefly mention to me when discussing our university's Web Development class.
Despite seeing html/css/javascript grouped together in many forms of media, discussions, as well as job requirements, I never understood
how interconnected they were until this project. Moreover, what we were required to do for this project was relatively simple. In comparison, there are many basic websites
that have more complicated UI, which has left me very curious as to how many possibilities there are in terms of creating
beautiful websites using these languages. 

After exploring how to create the optional features, one of my main questions is how to efficiently use audios. One of the reason this project
took me so long was because of having to clip specific parts of a singular base audio. This requires tedious decision making on
exactly where to clip audios. Moreover, there is one known issue with my prework design that I encountered when testing.
If you click the same button twice too quickly, it only plays the audio once. While it will register the guess correctly, the 
audio does not reflect as such. I hypothesize that one way to do this would be using .pause(), but honestly I have no
idea how to fix it.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a couple more hours to perfect this project, I would probably play around with the UI a bit more. 
Even though the game is pretty simple, I do not believe the graphics are up to par with what most
websites utilize. Granted, most websites are made professionally, and as a result it is difficult for a 
Computer Science student with minimal experience to fully utilize the tools that these languages provide. However,
given a couple more hours, I would have read more of the css and html documentation into website styling in order to provide 
a cleaner design. For example, I utilized 3 html buttons that indicate whenever a user
gets a strike. Using css, I was able to change the button to "lit" whenever a strike was present in my script.js file.
I feel like there is a better way to do this, but due to my lack of knowledge in web development, I was unable to come up with one.

In addition, I would actually change the guess() function, because the way that I did it, while functioning, is not as logically
efficient or as easily understood as the given solution.

Side notes, given that I have used audios that I have manually had to isolate, the quality of each is not
consitent. Because I was having to record each audio, I failed to account for volume, and some of my isolation work was not the best.
This led to either an inconsistency in volume, or the sound byte sounding cut-off. Given extra time, I would eliminate the sound 
variability by recording each sound at the same volume. Moreover, I would go back into the assets, and using WavePad I would
attempt to have cleaning audio clips that do not sound as choppy. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Jackson Covey

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.