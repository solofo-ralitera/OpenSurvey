const QuizRunService = {
    getByEventQuizAndRun(eventUid, quizUid, quizrunUid) {
        return new Promise((resolv, reject) => {
            (new Http()).send(`/quizrun/${eventUid}/${quizUid}/${quizrunUid}`, 'GET').then(response => {
                resolv(response);
            }).catch(function(err) {
                // TODO log
                console.error(err);
            });
        });
    },
    getByEventAndQuid(eventUid, quizUid) {
        return new Promise((resolv, reject) => {
            (new Http()).send(`/quizrun/${eventUid}/${quizUid}`, 'GET').then(response => {
                resolv(response);
            }).catch(function(err) {
                // TODO log
                console.error(err);
            });
        });
    },
    getQuizStep(eventUid, quizrunUid) {
        return new Promise((resolv, reject) => {
            (new Http()).send(`/quizrun/${eventUid}/${quizrunUid}/step`, 'GET').then(response => {
                resolv(response);
            }).catch(function(err) {
                // TODO log
                console.error(err);
            });
        });
    },
    respond(eventUid, quizrunUid, question) {
        return new Promise((resolv, reject) => {
            (new Http()).send(`/quizresponse/${eventUid}/${quizrunUid}/respond`, 'POST', {
                current_question: question.current_question,
                response: question.uid
            }).then(response => {
                resolv(response);
            }).catch(function(err) {
                // TODO log
                console.error(err);
            });
        });
    }
};
