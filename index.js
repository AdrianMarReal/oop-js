
function Stopwatch {
    let startTime, endTime, running, duration

    this.start = function(){
        if (running)
     
            throw new Error('StopWatch has already started');
            
        running = true

        startTime = new Date();
        };

        this.stop = function(){
            if (!running)
                throw new Error('Stopwatch is not started.');
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };
    }

    this.reset = function() {
        startTime = null;
        stop = null;
        running = null;
        duration = null;
    };

    Object.define p