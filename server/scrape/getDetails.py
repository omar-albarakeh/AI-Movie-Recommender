from selenium import webdriver
from selenium.webdriver.common.by import By
import json

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)
driver.maximize_window() 
containerClass = 'hero-film__content'
durationXPATH = '/html/body/cgp-root/main/cgp-movie-page/cgp-movie-header/div/div[3]/div[1]/div[2]/p[1]'
categoriesXPATH = '/html/body/cgp-root/main/cgp-movie-page/cgp-movie-header/div/div[3]/div[1]/div[2]/p[2]'
releaseDateXPATH ='/html/body/cgp-root/main/cgp-movie-page/cgp-movie-header/div/div[3]/div[1]/div[3]/div/p'
actorsXPATH = "/html/body/cgp-root/main/cgp-movie-page/cgp-movie-header/div/div[3]/div[1]/div[3]/div/div/p[1]//span"
storyXPATH = '/html/body/cgp-root/main/cgp-movie-page/cgp-movie-header/div/div[3]/div[1]/div[3]/div/div/p[2]'
movies = []

with open('./scrape/links.txt', 'r') as file:
    for line in file:
        try:
            movieDetails = {}
            url = line
            driver.get(url)

            movieContainer = driver.find_element(By.CLASS_NAME, containerClass)

            title = movieContainer.find_element(By.TAG_NAME, 'h1')

            img = movieContainer.find_element(By.TAG_NAME, 'img')
            imgSrc = img.get_attribute('src')

            story = movieContainer.find_elements(By.TAG_NAME, "p")[4]
            
            duration = driver.find_element(By.XPATH,durationXPATH) 

            categories = driver.find_element(By.XPATH,categoriesXPATH) 

            releaseDate = driver.find_element(By.XPATH,releaseDateXPATH) 

            actorsSection = driver.find_elements(By.XPATH, actorsXPATH)

            actors = ' '.join([span.text for span in actorsSection])

            movieDetails['title'] = title.text
            movieDetails['img'] = imgSrc
            movieDetails['story'] = story.text
            movieDetails['duration'] = duration.text
            movieDetails['categories'] = categories.text
            movieDetails['releaseDate'] = releaseDate.text[9:]
            movieDetails['actors'] = actors

            movies.append(movieDetails)  
        except:
           continue 
        

        

movies_json = json.dumps(movies, indent=4,ensure_ascii=False)

with open("./scrape/details.txt","a",encoding='utf-8') as file:
    file.write(movies_json)


driver.quit()
