export class Conway {
    private  LINE_JUMP:string = "\n"
    private SPACE_SEPARATOR = " "
    private EMPTY_STRING=""
    public draw(line:string){
        return this.drawSourceLine(line) + this.drawNextLine(line)
    }
    private drawSourceLine(line:string){
        return line + this.LINE_JUMP
    }
    private drawNextLine(line:string) {
        let compressedLine = this.removeLineSpace(line)
        if(compressedLine.length > 1 && compressedLine.charAt(0) != compressedLine.charAt(1)) {
           return this.countConsecutiveLineNumbers("2") +
               this.SPACE_SEPARATOR +
               this.countConsecutiveLineNumbers("1")
        }
        return this.countConsecutiveLineNumbers(compressedLine)
    }

    private countConsecutiveLineNumbers(compressedLine: string) {
        return compressedLine.length + this.SPACE_SEPARATOR + compressedLine.charAt(0);
    }

    private removeLineSpace(line:string) {
        return line.replace(this.SPACE_SEPARATOR, this.EMPTY_STRING)
    }
}