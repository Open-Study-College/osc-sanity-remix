import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

const data = {
    image: {
        asset: {
            url: '/path/to/image.jpg',
            altText: 'Open books on a desk with a pen'
        }
    },
    bodyRaw: [
        {
            _key: 'cd1fef92bbc1',
            _type: 'block',
            children: [
                {
                    _key: '3839ebf997020',
                    _type: 'span',
                    marks: [],
                    text: 'The distance learning experts'
                }
            ],
            markDefs: [],
            style: 'h1'
        },
        {
            _key: '81e217722120',
            _type: 'block',
            children: [
                {
                    _key: 'd67244c4786b0',
                    _type: 'span',
                    marks: [],
                    text: 'Over '
                },
                {
                    _key: 'ac15d17cc240',
                    _type: 'span',
                    marks: ['strong'],
                    text: '700 accredited qualifications'
                },
                {
                    _key: 'd5dadfd18289',
                    _type: 'span',
                    marks: [],
                    text: ' and courses to help you progress in your career, retrain, get to uni, or simply learn something '
                },
                {
                    _key: '6227f9674fed',
                    _type: 'span',
                    marks: ['em'],
                    text: 'new'
                },
                {
                    _key: '14153c2cfbab',
                    _type: 'span',
                    marks: [],
                    text: '. Designed for you to study from home, around your lifestyle.'
                }
            ],
            markDefs: [],
            style: 'normal'
        },
        {
            _key: '1daa1e505f08',
            _type: 'block',
            children: [
                {
                    _key: 'e5227dfb1e8c0',
                    _type: 'span',
                    marks: [],
                    text: 'With flexible payment plans and a range of '
                },
                {
                    _key: '8facdd539c16',
                    _type: 'span',
                    marks: ['79b83f3cbc39'],
                    text: 'special offers'
                },
                {
                    _key: 'ff6f69d13bae',
                    _type: 'span',
                    marks: [],
                    text: ' available, what are you waiting for?'
                }
            ],
            markDefs: [
                {
                    _key: '79b83f3cbc39',
                    _type: 'annotationLinkInternal',
                    reference: {
                        _ref: '1ed39754-85bc-4b5f-ae45-301300f52d66',
                        _type: 'reference',
                        _weak: true
                    }
                }
            ],
            style: 'normal'
        }
    ]
};

test('renders the Hero component without buttons', async () => {
    render(
        <MemoryRouter>
            <Hero settings={data} />
        </MemoryRouter>
    );

    const img = await screen.findByRole('img');
    const heading = await screen.findByRole('heading');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(img).toHaveAttribute('src', '/path/to/image.jpg');
    // @ts-ignore - can remove once test methods issue is resolved
    expect(img).toHaveAttribute('alt', 'Open books on a desk with a pen');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(heading).toHaveTextContent('The distance learning experts');
});

test('renders the Hero component with buttons', async () => {
    data['links'] = [
        {
            __typename: 'LinkInternal',
            _key: '51bdfbd12674',
            title: 'Special offers',
            reference: {
                __typename: 'Page',
                _key: null,
                title: 'Kitchen sink',
                slug: {
                    current: 'kitchen-sink'
                }
            }
        },
        {
            __typename: 'LinkExternal',
            _key: 'fc93bf42bc5a',
            title: 'External link',
            url: 'https://openstudycollege.com/',
            newWindow: true
        }
    ];

    render(
        <MemoryRouter>
            <Hero settings={data} />
        </MemoryRouter>
    );

    const buttonGroup = await screen.findByRole('group');

    // @ts-ignore - can remove once test methods issue is resolved
    expect(buttonGroup).toBeVisible();
});
