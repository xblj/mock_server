FROM mock-demo

WORKDIR /home/project

EXPOSE 7001

CMD ["npm","install"]
CMD ["npm","start"]
