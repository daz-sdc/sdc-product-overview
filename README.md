# System Design Capstone  

## Back-End for _Chinese Forum_ Ecommerce Website
This is a comprehensive back-end solution for the Chinese Forum ecommerce website. Initially able to handle 300 RPS, the back-end was optimized and scaled to handle up to 6000 RPS using docker containers and 3 EC2 micro instances. This was achieved with error rates at 0% and a average response time of 50ms.

## Technology
The app was built with **Express** and utilizes **PostgreSQL** and **Redis** as the databases of choice. The SQL queries were designed to ensure efficient performance, and a materialized view was implemented to further improve performance.

The app was rigorously tested using **Loader.io** and its performance was examined with **New Relic** to maximize performance per instance.

For ease of deployment, the app has been **dockerized** and can be found on Docker HUB.

## Solving the Problem of Limited Scalability
The success of an ecommerce website relies heavily on its ability to handle high levels of traffic and transactions. 

Specific notes regarding performance and all data may be found [here]([url](https://docs.google.com/document/d/16CK5OV4I-PJkaD5cQt9DEvmi0NmJ6sNy1jjKyXagXwk/edit#heading=h.619z08s4h6on)).

## Getting Started
Simply pull the docker image from Docker HUB and deploy it to your desired environment. 

## ENV

## Credits
This project was built by Abdiel Sanchez.
