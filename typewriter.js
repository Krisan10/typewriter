function typewriter(sentence) {//This line takes a parameter
  for (let i = 0; i < sentence.length; i++) {//This line takes the index of the sentence
    setTimeout(() => {//This is the callback setTimeout
      process.stdout.write(sentence[i]); //it uses process.stdout.write to print the index of the sentence
      if (i === sentence.length - 1) {//This line checks if the current iteration is the same as sentence.length. If it does, the console.log statement is used
        console.log();
      }
    }, i * 500); // This line adds the cumulative delay so each letter takes .5 second to print after the previous one
  }
}


// Start printing the characters of the sentence
typewriter("Kurumi Tokisaki is the love of my life!");