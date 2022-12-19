# Ashwini, Deiosha, Adrian

Would you rather is a fun icebreaker game where a host is able to generate a quiz. Users are given the option to select between two options, This or That.

At the end of the quiz the host will receive the results to show the users what they answered.

What problem or pain point does it solve? a. Keep it high level without going into too much detail. (3-4 sentences is enough)

This is a great icebreaker that opens up conversation for a group of people. It helps display commonalities between users. This is a great team building exercise to use for users who want to create interaction among a group of people.

## User Story #1

1. As a host, I want to generate a list of questions for users in my group to answer.
2. Feature Tasks

- Host can generate a list of questions.
- Questions will be based off of a category
- Host will have control over what questions are generated
- There will be a drop down list of categories to choose from.

3. Acceptance Tests

- Ensure that questions are being generated.
- Ensure the code is DRY.
- Ensure the host has control over questions.

4. Stretch Goal

- List of questions will be multiple randomized categories.
- Design CSS animation, video, music.

5. Estimation
Medium half of a day.

## User Story #2

1. As a host, I want to receive the results of the questions that were presented.
2. Feature Tasks

- Host will receive results on the main page.
- Should display results for all questions that were in the quiz.

3. Acceptance Tests

- Ensure the results display.
- Ensure the results are accurate.

4. Stretch Goal

- Use socket.io to show the live results.
- Animate results when they populate.

5.Estimation
Large 1 Day

## User Story #3

1. As an attendee I would like to enter my name for the game and join the game.
2. Feature Tasks

- Display the user's name.
- Allow users to join the current game.

3. Acceptance Tests

- Ensure users are able to enter their name in a text box.
- Ensure result from text box displays user's name.
- Ensure that the join game button takes the user to the current game in progress.

4. Stretch Goal

- Use Auth0 for login instead of the text box.

5.Estimation
Medium Half of a day.

## User Story #4

1. As a host I would like the ability to end the game after displaying the results.

2. Feature Tasks

- Host can end the game after results have been displayed.
- Ending the game will clear the current game and give an option to start a new game.

3. Acceptance Tests

- Ensure the current game ends.
- Ensure the ability to start a new game is available.

4. Stretch Goal

- Socket.io
- Ending credits animation.

5.Estimation

- Medium Half of a day.

## User Story #5

1. As an attendee I would like to be alerted when the game is over.
2. Feature Tasks

- Provide an alert message for the user to indicate that the game has ended.
- Provide the ability to play again.

3. Acceptance Tests

- Ensure the alert populates on the user's screen..
- Ensure the user is able to clear the alert.

4. Stretch Goal

- Give the user the ability to vote on previous questions..
- Design CSS animation.

5.Estimation
Small 3-4 hours.
