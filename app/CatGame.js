import React, { useState, useEffect } from 'react';
import { Button, Pressable, Image, StyleSheet, Text, View, } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';
const catImage = require('./Cat3.png'); //  cat image

export default function WhackACatGame() {
    const [level, setLevel] = useState(1);
    const [numRows, setNumRows] = useState(3);
    const [numCats, setNumCats] = useState(numRows * 3); // Initial number of cats
    const [cats, setCats] = useState([]);
    const [score, setScore] = useState(0);
    const [misses, setMisses] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // Initial game time
    const [gameOver, setGameOver] = useState(false);
    const [countdown, setCountdown] = useState(3); // Initial countdown value
    useEffect(() => {
        // Initialize cats array based on numCats
        setCats(Array(numCats).fill(false));
        // Timer for game duration
        const timer = setInterval(() => {
            setTimeLeft(time => {
                if (time === 0 || misses >= 10) {
                    clearInterval(timer);
                    setGameOver(true);
                    return time;
                }
                return time - 1;
            });
        }, 1000);
        // Cleanup timer
        return () => clearInterval(timer);
    }, [misses, numCats]);
    useEffect(() => {
        // Randomly show a cat
        const showCat = () => {
            const randomIndex = Math.floor(Math.random() * numCats);
            setCats(prevCats => {
                const newCats = [...prevCats];
                newCats[randomIndex] = true;
                return newCats;
            });
            // Cat disappears after a random time interval
            setTimeout(() => {
                setCats(prevCats => {
                    const newCats = [...prevCats];
                    newCats[randomIndex] = false;
                    return newCats;
                });
            }, Math.random() * 3000 + 1000); // Random time between 1 to 4 seconds
        };
        // Call showCat function every second
        const catInterval = setInterval(showCat, 1000);
        // Cleanup cat interval
        return () => clearInterval(catInterval);
    }, [numCats]);
    useEffect(() => {
        // Countdown before the game starts
        if (countdown > 0) {
            const countdownTimer = setTimeout(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
            return () => clearTimeout(countdownTimer);
        } else {
            // Start the game after countdown
            setCountdown(0);
            setLevel(1);
            setNumRows(3);
            setNumCats(9);
            setScore(0);
            setMisses(0);
            setTimeLeft(30);
            setGameOver(false);
        }
    }, [countdown]);
    // Function to handle whacking a cat
    const whackCat = index => {
        if (cats[index]) {
            setCats(prevCats => {
                const newCats = [...prevCats];
                newCats[index] = false; // Whack the cat
                return newCats;
            });
            setScore(prevScore => prevScore + 1); // Increment score
        } else {
            setMisses(prevMisses => prevMisses + 1); // Increment misses
        }
    };
    // Function to advance to the next level
    const nextLevel = () => {
        if (level < 5) {
            setLevel(prevLevel => prevLevel + 1);
            setNumRows(prevRows => prevRows + 1);
            setNumCats(prevCats => prevCats + numRows); // Increase cats based on new number of rows
            setScore(0); // Reset score
            setMisses(0); // Reset misses
            setTimeLeft(30); // Reset time
            setGameOver(false);
        }
    };
    // Function to restart the game
    const restartGame = () => {
        setLevel(1);
        setNumRows(3);
        setNumCats(9);
        setScore(0);
        setMisses(0);
        setTimeLeft(30);
        setGameOver(false);
    };
    return (
        <View style={styles.container}>
            {countdown > 0 ? (
                <Text style={styles.countdown}>{countdown}</Text>
            ) : !gameOver ? (
                <>
                    <Text style={styles.score}>Score: {score}</Text>
                    <Text style={styles.timer}>Time Left: {timeLeft}</Text>
                        <View style={styles.catContainer}>
                            {cats.map((cat, index) => (
                                <View key={index} style={styles.catButton}>
                                    {cat && (
                                        <Pressable onPress={() => whackCat(index)} disabled={!cat}>
                                            <Image source={catImage} style={styles.catImage} />
                                        </Pressable>
                                    )}
                                </View>
                            ))}
                        </View>

                </>
            ) : (
                <View style={styles.gameOverContainer}>
                    <Text style={styles.gameOver}>Game Over!</Text>
                    {level < 5 ? (
                        <Button title="Next Level" onPress={nextLevel} />
                    ) : (
                        <Button title="Restart" onPress={restartGame} />
                    )}
                            <Link
                                style={Styles.button}
                                href={{
                                    pathname: "/",
                                }} 
                            >
                                <Pressable >
                                    <Text>Back</Text>
                                </Pressable>
                            </Link>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    score: {
        fontSize: 24,
        marginBottom: 10,
    },
    timer: {
        fontSize: 20,
        marginBottom: 10,
    },
    catContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 20,
    },
    catImage: {
        width: 100,
        height: 100,
    },
    gameOverContainer: {
        alignItems: 'center',
    },
    gameOver: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    countdown: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});