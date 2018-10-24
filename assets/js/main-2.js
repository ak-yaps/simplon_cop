var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ed1450', '#ffffff'],
                ['#ffffff', '#ed1450'],
                ['#ed1450', '#ffffff']
            ]
        }
    }
});
