# kaggleMMLM2022
REPO for kaggle's march machine learning mania competition [2022]

My goal is to create an entry into Kaggle's 'March Machine Learning Mania' competition, but I want to tackle everything myself, from scratch. That includes the data collection and cleaning, NN building and then deployment based on Kaggle's specifications for input and output.

Then, I want to compare this approach to simply predicting based on seeding. Based on this casual observers' observations it seems that often the tournament just goes chalk (chalk meaning the higher seeds (1s, 2s, 3s) beat the lower seeds (14s, 15s, 16s)). I'm curious if just predicting based on difference in seeding will give a better predictive model than wasting all of my time with the data collection, analysis and NN training.

I'll discuss all of my findings and work on this project in [my blog](https://ericlumsden.github.io/blog/blog.html).


TODO:

1. Scraper to collect data from all tournaments and all teams from said tournaments (will happen with same scraper, save to SQL database)
2. Build basic program for training a NN
3. Train and test NN on collected data
4. Deploy for Kaggle's MMLM
5. Write chalk predictor
6. Test the two against one another in the upcoming March Madness Tournament
