function messageBmi(bmi)
{
    if (bmi > 18.5)
    {
        return "underweight";
    }
    if (18.5 <= bmi && bmi <= 24.9)
    {
        return "healthy";
    }
    if (25 <= bmi && bmi <= 29.9)
    {
        return "overweight";
    }
    if (bmi > 30)
    {
        return "obesity";
    }
}



