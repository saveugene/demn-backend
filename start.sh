until nc -z mongo $MONGO_PORT
do
    echo "Waiting for service mongo:$MONGO_PORT to start..."
    sleep 2
done
if [[ -z $runtype ]]; 
then
    runtype="prod-runtime-ecosystem"
fi

npm run $runtype
echo "Started in: $runtype mode"