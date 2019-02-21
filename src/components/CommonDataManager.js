export default class CommonDataManager
{

    static myInstance = null;

    _stats = "empty";
    _cats = "empty";


    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getStats() {
        return this._stats;
    }

    setStats(stats) {
        this._stats = stats;
    }

    getCats()
    {
      return this._cats;
    }

    setCats(cats)
    {
      this._cats = cats;
    }
}
