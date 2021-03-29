import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('make sure shortenText will not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('make sure shortenText will shorten text over 100 characters and "..." are the last three characters', () => {
    const shortened = shortenText(longText);
    expect.assertions(2)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count number of words in a sentence', () => {
    expect(wordCount(posts)).toEqual(233)
})

test('ensure that passing in users and posts will attach a displayname', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('make sure posts with no matching user are removed', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost)
})