#!/bin/bash
# setting up prerequisites

bin/elasticsearch-plugin install analysis-kuromoji 

bin/elasticsearch-plugin install analysis-icu

bin/elasticsearch-plugin install analysis-smartcn

bin/elasticsearch-plugin install analysis-stempel

exec /usr/local/bin/docker-entrypoint.sh elasticsearch