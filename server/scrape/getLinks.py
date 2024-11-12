from selenium import webdriver
from selenium.webdriver.common.by import By
import json

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(options=options)
url = 'https://www.pathe.fr'
driver.get(url)

swiper_slides = driver.find_elements(By.CLASS_NAME, 'swiper-slide')

links = []
for slide in swiper_slides:
    a_tag = slide.find_element(By.TAG_NAME, 'a')
    if a_tag:
        links.append(a_tag.get_attribute('href'))

with open("links.txt","a") as file:
    file.write('\n'.join(links))
print(json.dumps(links, indent=4))

driver.quit()