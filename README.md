Describe: beepBoopRobo()

Test: "It should return an array containing a value of 0 if the number 0 is inputted."
Code: beepBoopRobo(0);
Expected Output: 0

Test: "It should return an array with the values of 0 and 'Beep!' if the number 1 is inputted."
Code: 
const inputNumber = 1;
beepBoopRobo(inputNumber);
Expected Output : [0, "Beep!"]

Test: "It should return an array with the values of 0, 'Beep!', and 'Boop!" if the number 2 is inputted."
Code: beepBoopRobo(2);
Expected Output: [0, "Beep!", "Boop!"]

Test: "It should return an array with the values of 0, 'Beep!', 'Boop!', and "Wont you be my neighbor?" if the number 3 is inputted."
Code: beepBoopRobo(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "It should return an array with the values of 0, 'Beep!', 'Boop!', "Wont you be my neighbor?", and 4 if the number 4 is inputted."
Code: beepBoopRobo(4);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4]

Test: "It should return an array with the values of 0, 'Beep!', 'Boop!', "Wont you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!' if the number 10 is inputted."
Code: beepBoopRobo(10);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]

Test: "It should return an array with the values of 0, 'Beep!', 'Boop!', "Wont you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', and 'Boop!' if the number 21 is inputted."
Code: beepBoopRobo(21);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!"]