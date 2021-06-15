import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
    return(
        <View style={styles.view1}> 
       <Text style={styles.header}> READ A story </Text> 
       <Text style={styles.text}> ONCE, on the bank of a river, a monkey made a home for
himself in a tree laden with fruit. He lived in it happily eating
to his heart’s content the fruit of his choice.
The monkey was happy but lonely and wanted a
companion to talk to and share the fruits with. But there
was no one around, not even another monkey, till one day a
crocodile appeared on the riverside.
“Hello, there,” said the monkey. “Do you live in this river?
Would you like to eat some fruit?”
“Good morning,” replied the crocodile politely. “I did come
here in search of food for myself and my wife. Nice of you to
offer me fruit.”
The monkey plucked some from the nearest branch and
threw them down. The crocodile found them delicious.
“Thanks,” he said. “May I have some on my next visit?”
“Certainly, as many as you like and some for your wife
too,” said the monkey. “Do come again. I’m rather lonely here”.
The crocodile visited the monkey regularly and ate the
fruits which his host threw down. He took some home for his
wife. The monkey and the crocodile were now the best of
friends. They talked and were never tired of talking. They
talked about birds and animals, about the villages nearby
and the difficulties villagers faced in raising good crops
for lack of rain.
One day, the crocodile stayed with the monkey longer than
usual. His wife was annoyed waiting and waiting managing
the little crocodiles that had just been hatched. She said,
“Who is this friend of yours you are so fond of?”
“Oh, he is a very nice monkey,” he replied. “He lives on a
fruit-tree. He sends fruits for you everyday. You don’t expect
me to climb trees, do you?”
“A nice monkey, I’m sure,” replied the wife with obvious
sarcasm. “If you ask me, this monkey should be my food. I
want to eat his heart so much.”
“What a foolish thing to say!” shouted the crocodile. “I
can’t kill a friend, though I won’t mind a monkey occasionally
for a change of taste.”
“You bring him here,” ordered the wife. “I want to see him.”
“So you can eat him. Never!” declared her husband.
His wife was furious and she dived in to hide herself at the
bottom of the river leaving the little ones to pester their father.
The crocodile was in a serious dilemma. He loved his wife
and was very fond of his friend too. Finally, he decided to be
on the side of his wife. She was his life-partner after all. ‘I
know it’s a sin to betray a friend, but I have no choice,’ he
said to himself. ‘I’ll invite the monkey home and hope
for the best.’
“My wife wants you over for a meal, dear friend,” said the
crocodile when he visited the monkey next. “You must come
home with me today.”
“With pleasure,” said the monkey. “I’m no swimmer, but
can ride on your back.” And they set out.
In the middle of the river, where the current was the
strongest, the crocodile could no longer hide his intention.
“Sorry, my friend,” he said hesitatingly, “but I have to go
under water now. I’ve brought you here to kill you. My wife
cannot survive without eating your heart. Good bye.”
The monkey was scared and distressed. But he was sensible
and clever like all monkeys. He kept a cool head. Calmly he
said, “I’d do anything for you and your family. You are my only
friend. After all, what is a monkey’s heart compared with the life
of a crocodile’s wife? But how foolish could you be? Why didn’t
you tell me before? I’d have brought my heart along.”
“But where is your heart?” asked the crocodile innocently.
“I thought you carried it all the time.”
“Of course not. It’s there on the tree. Let’s swim back at
once and get it. Your wife must be waiting,” replied the monkey
gaining confidence.
“Oh dear! What a mistake!” hissed the crocodile. They laughed
loudly as the crocodile took a full turn to reach the tree.
On the river-bank, the monkey
jumped on to the tree and heaved a
deep sigh of relief. He plucked a fruit
or two from the nearest branch and
throwing them down said, “Let your
wife have some fruit rather than my
heart. Fresh fruits are good for mind
and body. Good bye, friend, and if you
don’t mind, we won’t meet again.”
The crocodile, sadder and wiser, shed
a few tears which were genuine and
turned back to go home. He was in a
hurry to tell his wife a thing or two.
(a story from The Panchatantra)
</Text>
        </View>
    )
    }
}

const styles= StyleSheet.create({
    text:{
        flex:1,
        fontSize: 10, fontWeight: 'bold',
        alignItems: 'center', justifyContent: 'center',
    },
    header:{
        backgroundColor: "coral",
        fontSize: 30,
    },
    view1:{
        flex:1,
        alignItems: 'center', justifyContent: 'center'
    }
});