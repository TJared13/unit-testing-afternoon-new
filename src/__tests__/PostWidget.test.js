import React from 'react';
import {render} from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import {shortenText} from '../utils/functions';
import {MemoryRouter} from 'react-router-dom';
import {posts} from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it('check if post is rendered', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post} />
        </MemoryRouter>
    )

    expect(container.textContent).toContain(post.text)
})

it('checks if passing through a long post will shorten text by default', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost} />
        </MemoryRouter>
    )

    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('checks if all text is displayed when expanded', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    )

    expect(container.textContent).toContain(longPost.text)
})