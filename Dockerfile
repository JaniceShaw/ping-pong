# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update --allow-releaseinfo-change && apt-get upgrade -y && apt-get install -qqy \
        wget \
        bzip2 \
        graphviz \
        software-properties-common \
        npm

# added for react  -  software-properties-common \  npm s
RUN npm install npm@latest -g && \
    npm install n -g && \
    n 16.13.2

# Copy the requirements file from local folder to image
COPY ./backend/requirements.yml /backend/requirements.yml

# create the environment inside the docker container
RUN conda env create -f /backend/requirements.yml

# we set the path were all the python pacakages are
ENV PATH /opt/conda/envs/ping-pong/bin:$PATH

# activate app
RUN echo "conda activate ping-pong" >~/.bashrc

RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*

# pass all the files and folders from local folder to image
COPY ./backend /backend
# new react
RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
COPY ./frontend /frontend_tmp
WORKDIR frontend_tmp
RUN npm i
RUN npm run build


# set the working directory to /app for whenever you login into your container
WORKDIR /backend
