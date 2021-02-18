function checkSign(num) {
    return (num == 0) ? "zero"
        : (num >= 1) ? "positive"
        : "negative";
}

checkSign(10);
