var granimInstance = new Granim({
    element: '#canvas-image',
    direction: 'left-right',
    opacity: [1, .5, 0],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#585858', '#ed1450', '#585858'],
                ['#ed1450', '#585858', '#ed1450']
            ],
            transitionSpeed: 10000
        }
    }
});
