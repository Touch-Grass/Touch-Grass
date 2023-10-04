let bcrypt = require("bcryptjs");

export const SALT_ROUNDS = 10;

/**
 * Contains utility methods for cryptographic transformations.
 */
export class CryptographyUtils {
    /**
     * Hashes the given input string using bcryptjs.
     * The hashes generated incorporate a salt generated using the secure random number generator.
     * https://en.wikipedia.org/wiki/Bcrypt
     * @param input The input string to hash
     * @returns {Promise<string>} The generated hash
     */
    public static async hashString(input: string): Promise<string> {
        return await bcrypt.hash(input, SALT_ROUNDS);
    }

    /**
     * Validates a string against bcrypt hash.
     * @param plainInput The input string to validate
     * @param hashToCheck The hash to validate against
     * @returns {Promise<boolean>} Is the input equal to the value of the hash?
     */
    public static async checkHashMatch(plainInput: string, hashToCheck: string): Promise<boolean> {
        return await bcrypt.compare(plainInput, hashToCheck);
    }
}
